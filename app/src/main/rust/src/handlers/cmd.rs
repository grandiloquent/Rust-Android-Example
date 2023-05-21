use android_logger::log;
use rocket::http::Status;
use std::process::Command;
#[get("/cmd?<cmd>")]
pub fn execute_cmd(cmd: String) -> Result<String, Status> {
    let mut values = cmd.split(" ").filter(|x| x.trim().len() > 0);
    let result = Command::new(values.nth(0).unwrap())
        .args(values.skip(1).collect::<Vec<&str>>())
        .output();
    match result {
        Ok(result) => Ok(format!(
            "{}{}",
            String::from_utf8(result.stdout).unwrap(),
            String::from_utf8(result.stderr).unwrap()
        )),
        Err(err) => Err(Status::InternalServerError),
    }
}
#[get("/su?<cmd>")]
pub fn execute_su(cmd: String) -> Result<String, Status> {
    let result = Command::new("su")
        .arg("-c")
        .arg(format!(r#""{}""#, cmd))
        .output();
    match result {
        Ok(result) => Ok(format!(
            "{}{}",
            String::from_utf8(result.stdout).unwrap(),
            String::from_utf8(result.stderr).unwrap()
        )),
        Err(err) => Err(Status::InternalServerError),
    }
}