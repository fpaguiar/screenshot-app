#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use screenshots::Screen;
use std::{fs, time::Instant};

extern crate repng;
extern crate scrap;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn screenshot(x: i32, y: i32, width: u32, height: u32) {
    let start = Instant::now();

    let screen = Screen::from_point(100, 100).unwrap();
    println!("capturer {:?}", screen);

    let image = screen.capture_area(x, y, width, height).unwrap();
    let buffer = image.buffer();

    fs::write("screenshot.png", &buffer).unwrap();

    println!("Time elapsed: {:?}", start.elapsed());
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, screenshot])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
