const { object, array, string } = require('yup');

const ImageModel = require('../models/Image.model');

const uploadSchema = object({
  buffer: array().required().min(1),
  filename: string().required().nonNullable()
});

async function upload(req, res) {
  try {
    const validatedBody = await uploadSchema.validate(req.body);

    const instance = new ImageModel({
      buffer: validatedBody.buffer,
      filename: validatedBody.filename
    });

    await instance.save();

    return res.json(validatedBody);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  upload
};