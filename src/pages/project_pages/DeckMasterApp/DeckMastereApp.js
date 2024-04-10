import deckMasterImage from '../../../images/Screenshot_1641.png';

export default function DeckMasterApp() {

    return (
        <>
            <div className="DeckMaster project" id='cs'>
                    <h1>DeckMaster</h1>
                    <div className='img'>
                        <img src={deckMasterImage}/>
                        <img src={deckMasterImage} className='bigger'/>
                    </div>
                    <p className='description'>
                        DeckMaster is a card deck marketplace featuring PayPal integration for secure 
                        transactions, SQL database for user data storage, and user logins. The app was 
                        meticulously designed to provide an intuitive browsing and purchasing experience, 
                        making it easy for enthusiasts to discover and buy their favorite card collections.
                        </p>
            </div>
        </>
    );
}