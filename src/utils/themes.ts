interface Theme {
  "--white": String;
  "--black": String;
  "--gray-1": String;
  "--gray-2": String;
  "--gray-3": String;
  "--gray-4": String;
  "--gray-5": String;
  "--gray-6": String;
  "--green": String;
  "--shadow": String;
}

const darkTheme: Theme = {
  "--white": "#fff",
  "--black": "#000",
  "--gray-1": "#fffffa",
  "--gray-2": "#ccc9dc",
  "--gray-3": "#324a5f",
  "--gray-4": "#1b2a41",
  "--gray-5": "#1C2127",
  "--gray-6": "#030509",
  "--green": "#85ffc7",
  "--shadow": "0px 2px 4px rgba(0, 0, 0, 0.25)"
};

const lightTheme: Theme = {
  "--white": "#fff",
  "--black": "#000",
  "--gray-6": "#fffffa",
  "--gray-5": "#e5e6e4",
  "--gray-4": "#cfd2cd",
  "--gray-3": "#a6a2a2",
  "--gray-2": "#847577",
  "--gray-1": "#223843",
  "--green": "#2a9d8f",
  "--shadow": "0px 2px 4px #e5e6e4"
};

export function changeTheme(dark: boolean) {
  if (dark) {
    for (var [key, value] of Object.entries(darkTheme)) {
      document.documentElement.style.setProperty(key, value);
    }
  } else {
    for (var [key, value] of Object.entries(lightTheme)) {
      document.documentElement.style.setProperty(key, value);
    }
  }
}

export {};
