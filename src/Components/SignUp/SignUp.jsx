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
import BluePiano from "./Imgs/BluePiano.jpg";
import HandsLifted from "./Imgs/HandsLifted.jpg";
import TheMustache from "./Imgs/TheMustache.jpg";
import TwoGirls from "./Imgs/TwoGirls.jpg";

export default function SignUp() {
  return (
    <div className="offset-1 row col-10 sign-up-sheet">
      <div className=" col-6 sign-up-layer">
        <img className="fade1 sign-up-img" src={redhead}></img>
        <img className="fade2 sign-up-img" src={Acoustic}></img>
        <img className="fade3 sign-up-img" src={BigBoom}></img>
        <img className="fade4 sign-up-img" src={BluePic}></img>
        <img className="fade5 sign-up-img" src={ClearBall}></img>
        <img className="fade6 sign-up-img" src={EthnicWorship}></img>
        <img className="fade7 sign-up-img" src={Midi}></img>
        <img className="fade8 sign-up-img" src={HandsLifted}></img>
        <img className="fade8 sign-up-img" src={StageDrums}></img>
        <img className="fade8 sign-up-img" src={StageGuitar}></img>
        <img className="fade8 sign-up-img" src={BluePiano}></img>
        <img className="fade8 sign-up-img" src={WhiteCassette}></img>
        <img className="fade8 sign-up-img" src={Vinyl}></img>
        <img className="fade8 sign-up-img" src={StageHat}></img>
        <img className="fade8 sign-up-img" src={TheMustache}></img>
        <img className="fade8 sign-up-img" src={TwoGirls}></img>
        <img className="fade8 sign-up-img" src={redhead}></img>
        <img className="fade8 sign-up-img" src={Acoustic}></img>
        <img className="fade8 sign-up-img" src={BigBoom}></img>
        <img className="fade8 sign-up-img" src={BluePic}></img>
        <img className="fade8 sign-up-img" src={ClearBall}></img>
        <img className="fade8 sign-up-img" src={EthnicWorship}></img>
        <img className="fade8 sign-up-img" src={Midi}></img>
        <img className="fade8 sign-up-img" src={HandsLifted}></img>
        <img className="fade8 sign-up-img" src={StageDrums}></img>
        <img className="fade8 sign-up-img" src={StageGuitar}></img>
        <img className="fade8 sign-up-img" src={BluePiano}></img>
        <img className="fade8 sign-up-img" src={WhiteCassette}></img>
        <img className="fade8 sign-up-img" src={Vinyl}></img>
        <img className="fade8 sign-up-img" src={StageHat}></img>
        <img className="fade8 sign-up-img" src={TheMustache}></img>
        <img className="fade8 sign-up-img" src={TwoGirls}></img>
        <img className="fade8 sign-up-img" src={redhead}></img>
        <img className="fade8 sign-up-img" src={Acoustic}></img>
        <img className="fade8 sign-up-img" src={BigBoom}></img>
        <img className="fade8 sign-up-img" src={BluePic}></img>
        <img className="fade8 sign-up-img" src={ClearBall}></img>
        <img className="fade8 sign-up-img" src={EthnicWorship}></img>
        <img className="fade8 sign-up-img" src={Midi}></img>
        <img className="fade8 sign-up-img" src={HandsLifted}></img>
        <img className="fade8 sign-up-img" src={StageDrums}></img>
        <img className="fade8 sign-up-img" src={StageGuitar}></img>
        <img className="fade8 sign-up-img" src={BluePiano}></img>
        <img className="fade8 sign-up-img" src={WhiteCassette}></img>
        <img className="fade8 sign-up-img" src={Vinyl}></img>
        <img className="fade8 sign-up-img" src={StageHat}></img>
        <img className="fade8 sign-up-img" src={TheMustache}></img>
        <img className="fade8 sign-up-img" src={TwoGirls}></img>
      </div>
      <div className="col-6 pt-5 sign-up-form">
        <h1 className="mt-5 pt-5 color-light-grey">Welcome Back!</h1>
        <h2 className="pb-4 ">
          All of your
          <span className="fancy-text sign-up-fancy"> favorites</span> are
          waiting for you
        </h2>
        <p className="offset-2 col-8 mb-5">
          Enter your Username and Email below to unlock access to our entire
          library of songs, links, and charts. The best part about it is that
          it's 100% FREE! No Cards, No Tiers, No Worries.
        </p>
        <Form className="offset-2 col-8 pt-3">
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
            <Col>
              <FormGroup check>
                <Input id="exampleCheckbox" name="checkbox" type="checkbox" />
                <Label check for="exampleCheckbox">
                  Remember Me
                </Label>
              </FormGroup>
            </Col>
            <Col>
              <Button>Sign In</Button>
            </Col>
            <Col>
              <Button>Sign Up</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
