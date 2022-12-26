import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Todo from '../model/Todo.js'

import UserModal from "../model/User.js";

const secret = 'test';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    const oldUser = await UserModal.findOne({ email });
    const todos=await Todo.find({});
    console.log(new Date().toDateString());
    console.log(date);

    
    
    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: todos, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  console.log(req.body);

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};