import { VerifiableCredential } from "@web5/credentials";
import { DidDht } from "@web5/dids";
import { loadDID, storeDID } from "./utils.js";

    // STEP 0: Set filepath to use or store DID.
    const filename = "./did.json";
    let attendee;

    //STEP 1: Check if user already has a DID, if not create a new DID and store it in a file.
    const existingDID = await loadDID(filename);

    if(!existingDID) {
        // creates a DID using the DHT method and publishes the DID document to the DHT
        attendee = await DidDht.create();

        console.log("DID:", attendee.uri);
        console.log("DID Document:", attendee.document);
        console.log("DIDDht:", attendee);

        await storeDID(filename, attendee);

    } else {

        attendee = await DidDht.import({ portableDid: existingDID });
        console.log('attendee', attendee);
    }

    // TODO: STEP 2: Create a verifiable credential


    // TODO: STEP 3: Sign VC with DID and get JWT.
