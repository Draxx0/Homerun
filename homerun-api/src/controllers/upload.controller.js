import FormData from "form-data";
import fs from "fs";
import axios from "axios";

const UploadController = {
  upload: async (req, res) => {
    try {
      const webhookURL = process.env.WEBHOOKS_URL;

      //!WORKS
      // req.files.forEach((file) => {
      //   const data = new FormData();
      //   data.append("file", fs.createReadStream(file.path));

      //   axios
      //     .post(webhookURL, data, {
      //       headers: {
      //         ...data.getHeaders(),
      //       },
      //     })
      //     .then((response) => {
      //       console.log(`Image envoyée avec succès: ${response.data}`);
      //       res.status(200).send(response.data.attachments);
      //     })
      //     .catch((error) => {
      //       console.error(`Erreur lors de l'envoi de l'image: ${error}`);
      //       res.status(500).send(error.message);
      //     });
      // });
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  },
 
};

export default UploadController;
