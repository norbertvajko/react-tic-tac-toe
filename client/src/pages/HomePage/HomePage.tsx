import {LeftDrawer} from "../../components/LeftDrawer/LeftDrawer.tsx";
import {TicTacToe} from "../../components/TicTacToe/TicTacToe.tsx";

export const HomePage = () => {
    return (
        <>
            <LeftDrawer mainElement={ <div style={{background: "white"}}>
                <TicTacToe />
            </div>} />
            {/*<Container style={{background: '#151415', height: "100vh", width: "100%", color: "#FFFFFF"}} maxWidth={false} disableGutters>*/}

            {/*</Container>*/}
        </>
    )
}