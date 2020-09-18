import React from 'react';
import { Container } from 'react-bootstrap';

const FAQ: React.FC = () => {
    return (
        <section className="border-top pt-150 pb-150">
            <Container>
                <h3 className="h1">
                    Frequently Asked Questions
                </h3>
                <br />
                <h5>Is Moai made by NHS?</h5>
                <p>
                    Moai has been built by Secretarium, a London-based deep-tech startup specialising in data security. The project was funded by UK Research and Innovation, a public body of the government that directs research into innovation.
                </p>
                <br />
                <h5>How do you secure my data?</h5>
                <p>
                    If you are using the Moai app, you won't be asked to provide any personal identifiers, like your name or phone number. When you download the app, you will be assigned a unique ID, no personal information is attached to this ID and the app doesn’t trace your geolocation. It’s the same for the venues you visit, they will be assigned a unique ID that is recorded via a QR code when you scan in, but no address information will ever be known.
                    <br />
                    <br />
                    If you choose not to download the app, and check in using the browser instead, you will be asked to provide your name and contact number. This information, along with the unique IDs of all app users and venues, is always fully encrypted using a mixture of secure hardware and tamper-proof code. Meaning that no human will ever be able to access it.
                </p>
                <br />
                <h5>How much does it cost to use Moai?</h5>
                <p>
                    Nothing. It’s completely free for locations and guests to use the Moai app.
                </p>
                <br />
                <h5>Can data collected through Moai be used for marketing?</h5>
                <p>
                    No. There are no personal identifiers recorded on the Moai app for guests or venues. If you choose not to download the app, and check in using the browser instead, you will be asked to provide your name and contact number. This information is always fully encrypted, no human has access to it, and it cannot be used for marketing purposes.
                </p>
                <h5>How does the app trace me if it doesn’t know where I’ve been?</h5>
                <p>
                    Moai doesn’t require venues to provide any location information to generate a QR code. So when a guest checks into a venue, the app only knows the guest’s unique ID has visited the venue’s unique ID (linked to a unique QR code). Moai only knows when the visit has taken place and the type of the venue. We use this information to compute exposure risk.
                </p>
                <br />
                <h5>Does the app need to use my Bluetooth or GPS?</h5>
                <p>
                    No. Moai doesn’t rely on Bluetooth or GPS to track other phones your phone has come into signal with. It never knows where you are or who you have been near to, and nothing needs to run in the background on your device. The app only records the unique QR codes (with no address details attached) of the venues you have visited. It does not ever access your GPS.
                </p>
                <br />
                <h5>Does Moai record my location history? </h5>
                <p>
                    No. Moai only knows the unique IDs of the venues you have checked into. No location information is ever recorded, venues do not provide this when they generate a QR code.
                </p>
                <br />
                <h5>If you don’t have my personal information, how do you know if I’m at risk?</h5>
                <p>
                    Moai doesn’t need to know who you are to know if you have been close to somebody with COVID-19. The app only knows the QR code information that you scan in, which is linked to an anonymous venue. If there is a potential exposure risk at any of the venues you have visited, you’ll receive a secure message within the app.
                </p>
                <br />
                <h5>How will you know if I might have caught COVID-19?</h5>
                <p>
                    If somebody who has visited the same venue as you, in a select period of time, is tested positive for COVID-19, you will be contacted via the app.
                </p>
                <br />
                <h5>Will anyone else find out if I get COVID-19? </h5>
                <p>
                    No. If you test for positive for COVID-19, people who have been in the same venues as you at the same time will be asked to get a test. Nobody will know who you are or the location where you could have come into contact with each other. All communication will be carried out by a health professional via a secure chat platform in the app. Because none of your personal information, or any location information, is ever taken, the chat handler doesn’t know anything about you, or where you’ve been. All they know is that you may have been exposed. There will be cases, for example if you only have a small contact bubble, where your friends will be able to infer that it could have been you who was infected. We always recommend letting your close network know if you develop any symptoms of COVID-19.
                </p>
                <br />
                <h5>Why doesn’t Moai use the Google/Apple tracing system?</h5>
                <p>
                    First, many mobile phones are not compatible with this new feature from Google and Apple. Secondly, the Apple and Google design is decentralised, which means the contact scenarios stay on each person’s mobile phone.
                    <br />
                    <br />
                    Secretarium technology encrypts data at all times to enable a centralised design without creating a mass surveillance system.
                    <br />
                    <br />
                    As part of the UKRI grant, healthcare researchers will be able to securely use insight from the encrypted data (aggregations) to study virus propagation and improve understanding of the COVID-19 virus.
                </p>
                <br />
                <h5>Will Moai monitor me if I have to quarantine?</h5>
                <p>
                    No. The app never knows where you are and cannot be used to track social distancing or monitor you if you need to quarantine.
                </p>
                <br />
                <h5>How do I set up Moai at my venue?</h5>
                <p>
                    Just generate a QR code via the website to download a PDF copy of your poster and information about how to display it. There is no need to provide any location information.
                </p>
                <br />
                <h5>What if I have more than one premises? </h5>
                <p>
                    You must generate a unique QR code for each premises. If you have different sections within your premises which are completely separate from each other (eg indoor and outdoor seating or separate cinema screens) then you can generate separate codes. QR codes are free.
                </p>
            </Container>
        </section >
    );
};

export default FAQ;
