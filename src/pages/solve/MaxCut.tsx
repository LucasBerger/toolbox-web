import { Center, Divider, Text, Textarea } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import React, { ChangeEvent, useState } from "react";
import { Container } from "../../components/Container";
import { Main } from "../../components/Main";
import { GraphArea } from "../../components/solvers/Graph/GraphArea";
import { ProgressHandler } from "../../components/solvers/ProgressHandler";
import { SolverTitle } from "../../components/solvers/SolverTitle";
import { parseGML } from '../../converter/graph/gml/GmlParser';

const MaxCut: NextPage = () => {
    const [graphData, setGraphData] = useState<any>( null);

    const [graphString, setGraphString] = useState("");
    const [errorString, setErrorString] = useState("");

    function onTextAreaChange(event: ChangeEvent<HTMLTextAreaElement>): void {
        const newGraphString = event.target.value;
        setGraphString(newGraphString);

        try {
            let data = parseGML(newGraphString);
            setGraphData(data);

            setErrorString('');
        } catch (e: any) {
            setErrorString(e.message);
        }
    }

    return (
        <Container minHeight="100vh">
            <Head>
                <title>ProvideQ</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                {/* TODO: replace favicon */}
            </Head>
            <SolverTitle title="MaxCut Solver" text="For a given undirected, weighted graph, this algorithm finds a cut that is a maximum in some way or another." />
            <Main mb="20vh">

                <Textarea placeholder="Enter your graph in GML format"
                          value={graphString}
                          minHeight="10rem"
                          isInvalid={errorString != ""}
                          onChange={onTextAreaChange} />

                <Text backgroundColor="tomato">{errorString}</Text>

                <Center>
                    <GraphArea graphData={graphData} graphHeight={500} graphWidth={500} />
                </Center>

                <Divider />
                <ProgressHandler
                    problemType="maxCut"
                    problemInput={graphString} />
            </Main>
        </Container>
    );
};
export default MaxCut;