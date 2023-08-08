//The function takes a file as input and returns a Promise that resolves with the Base64 representation of the file.
export const convertBase64 = async (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader(); //use to read URL
      fileReader.readAsDataURL(file); //return a data URL
      fileReader.onload = () => {
        resolve(fileReader.result); // pass data URL as argument
      };
      fileReader.onerror = (error) => {
        reject(error); //pass error as argument
      };
    });
  };
  //The function finally returns the Promise.