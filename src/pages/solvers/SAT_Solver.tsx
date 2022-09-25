import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "../../components/Container";
import { Main } from "../../components/Main";
import React from "react";
import { SolverTitle } from "../../components/solverComponents/SolverTitle";
import { SAT_TextArea } from "../../components/solverComponents/SATComponents/SAT_TextArea";
import { SAT_Help } from "../../components/solverComponents/SATComponents/SAT_Help";
import { InputButtonPanel } from "../../components/solverComponents/InputButtonPanel";

const SAT_Solver: NextPage = () => {
  let SAT_TextAreaRef: React.MutableRefObject<SAT_TextArea | null> = React.createRef();
  return (
    <Container minHeight="100vh">
      <Head>
        <title>ProvideQ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* TODO: replace favicon */}
      </Head>
      <SolverTitle title="SAT Solver" text="For a given Boolean formula, this algorithm checks if there exists an interpretation that satisfies it." />
      <Main mb="20vh">
      <SAT_TextArea ref={SAT_TextAreaRef} />
      <InputButtonPanel 
        helpBody={<SAT_Help/>}
        problemText={() => SAT_TextAreaRef.current?.state.problemString}
        setProblemText={((code: string) => SAT_TextAreaRef.current?.setProblemString(code))}
        />
      </Main>
    </Container>
  );
};

export default SAT_Solver;
