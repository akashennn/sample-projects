import bodyParser from "body-parser";
import express, { Express, Request, Response } from "express";
import { TOtp } from "./types";

// express server
const app: Express = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// mobile number x otp store
// key: mobile number
const savedOtpMap = new Map<number, TOtp>();

// generate OTP
const generateOtp = (): number => {
  return Math.floor(100000 + Math.random() * 900000);
};

app.post("/generate", (req: Request, res: Response) => {
  // save mobile number in to a var
  const mobileNumber = req.body.mobileNumber;

  // return error if the mobile number is not there
  if (!mobileNumber) {
    res.status(400).send({
      error: "Mobile Number is Required",
    });
  }

  // TODO: validations ie check the number is 9 digits or not

  // generate the otp
  const generatedOtp = generateOtp();

  // save it / db call
  savedOtpMap.set(mobileNumber, {
    otp: generatedOtp,
    createdAt: Date.now(),
  });

  // DEBUG: saved otp
  // console.log("saved OTP", savedOtpMap.get(mobileNumber).otp);

  // saved to db or not
  if (savedOtpMap.has(mobileNumber)) {
    res.status(201).send({
      message: `OTP sent to ${mobileNumber}`,
    });
  }

  res.status(500).send({
    message: "Sorry! Something went wrong!",
  });
});

app.post("/verify", (req: Request, res: Response) => {
  // save mobile number in to a var
  const mobileNumber = req.body.mobileNumber;
  const otp = req.body.otp;

  // return error if the mobile number is not there
  if (!mobileNumber) {
    res.status(400).send({
      error: "Mobile Number is Required",
    });
  }

  if (!otp) {
    res.status(400).send({
      error: "OTP is Required",
    });
  }

  // check if there is an OTP for the mobile number provided
  if (savedOtpMap.get(mobileNumber).otp === otp) {
    // check if OTP is expired or not / 10 secs
    const expiredAt = savedOtpMap.get(mobileNumber).createdAt + 10000;

    if (Date.now() > expiredAt) {
      res.status(400).send({
        message: "OTP has expired",
      });
    } else {
      res.status(200).send({
        message: "OTP validation successful!",
      });
    }
  } else {
    res.status(400).send({
      error: "OTP validation failed",
    });
  }
});

app.listen(3000, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:3000`);
});
