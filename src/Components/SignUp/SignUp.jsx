import React from "react";
import { Form, Row, Col, Label, Input, FormGroup, Button } from "reactstrap";
import "./SignUp.css";
import redhead from "./Imgs/redhead.jpg";
import Acoustic from "./Imgs/Acoustics.jpg";
import BigBoom from "./Imgs/BigBoom.jpg";
import BluePic from "./Imgs/BluePic.jpg";
import ClearBall from "./Imgs/ClearBall.jpg";
import EthnicWorship from "./Imgs/EthnicWorship.jpg";
import Midi from "./Imgs/Midi.jpg";
import StageDrums from "./Imgs/StageDrums.jpg";
import StageGuitar from "./Imgs/StageGuitar.jpg";
import StageHat from "./Imgs/StageHat.jpg";
import Vinyl from "./Imgs/Vinyl.jpg";
import WhiteCassette from "./Imgs/WhiteCasset.jpg";

export default function SignUp() {
  return (
    <div className="offset-1 row col-10 sign-up-sheet">
      <div className=" col-6 sign-up-layer">
        <img className="sign-up-img" src={redhead}></img>
        <img className="sign-up-img" src={Acoustic}></img>
        <img className="sign-up-img" src={BigBoom}></img>
        <img className="sign-up-img" src={BluePic}></img>
        <img className="sign-up-img" src={ClearBall}></img>
        <img className="sign-up-img" src={EthnicWorship}></img>
        <img className="sign-up-img" src={Midi}></img>
        <img className="sign-up-img" src={StageDrums}></img>
        <img className="sign-up-img" src={StageGuitar}></img>
        <img className="sign-up-img" src={StageHat}></img>
        <img className="sign-up-img" src={Vinyl}></img>
        <img className="sign-up-img" src={WhiteCassette}></img>
      </div>
      <div className="col-6 pt-5 sign-up-form">
        <h1 className="mt-5">Welcome Back!</h1>
        <h2 className="pb-4 ">
          All of your
          <span className="fancy-text sign-up-fancy">favorites</span> are
          waiting for you
        </h2>
        <p className="offset-2 col-8 mb-5">
          Entering your email will NOT automatically sign you up for the
          newsletter. If you'd like to recieve the newsletter, head to our
          homepage and let us keep you informed
        </p>
        <Form className="offset-2 col-8 mt-5 pt-5">
          <Row className="row-cols-lg-auto g-3 align-items-center">
            <Col>
              <Label className="visually-hidden" for="exampleEmail">
                Username
              </Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Username"
                type="email"
              />
            </Col>
            <Col>
              <Label className="visually-hidden" for="examplePassword">
                Email
              </Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Email"
                type="password"
              />
            </Col>
            {/* <Col>
              <FormGroup check>
                <Input id="exampleCheckbox" name="checkbox" type="checkbox" />
                <Label check for="exampleCheckbox">
                  Remember Me
                </Label>
              </FormGroup>
            </Col> */}
            <Col>
              <Button>Submit</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
