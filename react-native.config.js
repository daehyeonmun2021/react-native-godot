module.exports = {
  dependency: {
    platforms: {
      android: {
        // Subdirectory paths in Android-autolinking.cmake are generated based on these:
        // Paths given are relative to the ./android folder:
        cmakeListsPath: "./src/generated/jni/CMakeLists.txt",
      },
    },
  },
};
