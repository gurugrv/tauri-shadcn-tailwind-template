// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    let builder = tauri::Builder::default()
        .plugin(tauri_plugin_shell::init());

    // Platform-specific configurations can be added here if needed
    #[cfg(target_os = "windows")]
    {
        // Windows-specific setup (if needed in future)
    }

    #[cfg(target_os = "linux")]
    {
        // Linux-specific setup (if needed in future)
    }

    builder
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}