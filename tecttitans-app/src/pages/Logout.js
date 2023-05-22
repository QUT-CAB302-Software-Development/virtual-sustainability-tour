import { GoogleLogout } from '@leecheuk/react-google-login';

const clientId = "353588049838-0uanbho4sp1tqs675r5brmse59132g4a.apps.googleusercontent.com";

function Logout() {

    const onSuccess = () => {
        console.log("Log out successful!");
    }
    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
        </div>
    )
}

export default Logout;