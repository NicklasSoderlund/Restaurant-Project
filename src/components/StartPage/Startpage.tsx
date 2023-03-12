import { Link } from 'react-router-dom';
import { Button } from '../styled/Button';
import './startPage.scss';
import React from 'react';
import fireVideo from "./Assets/fireVideo.mp4";
import steakVideo from "./Assets/steak-16406.mp4"

export function StartPage() {
return <div>
        <div className='hero'>
            <div className='heroContent'>
            <div className='ceasar'>
                <img src="https://i.imgur.com/MW6zckt.png" alt="logo of ceasar"></img>
            </div>
            <h3>Welcome to Jucius Steaksar</h3>
            <div className="buttoncontainer">
            {/* <Link to={"/Booking"}><button>Book a table</button></Link>
            <Link to={"/Contact"}><button>Contact us</button></Link> */}
            <Button color='#f89956' width='11em' textColor='black' border='3px solid black'>Book a table</Button>
            <Button color='' width='11em' textColor='' border='3px solid white'>Contact us</Button>
            </div>
            </div>
        </div>
        <main>
        <div className="mainContainer">
        <div className="imageContainer">
            <img src="https://railssteakhouse.com/files/aff8fa376667a9c891d96218b25b9d6a_full_size.jpg" alt="Picture of restaurant">
            </img>
        </div>
        <div className="container">
            <p>Looking for a top-notch steakhouse experience? Look no further than Jucius Steakcar. From the moment you step through our doors, you'll be greeted by our warm and welcoming staff, who are dedicated to making your dining experience unforgettable. Our elegant decor sets the perfect mood for a special occasion or a romantic night out, while our extensive wine list and craft cocktail menu make for the perfect complement to your meal.</p>
            <p>At Jucius Steakcar, we believe that quality ingredients make all the difference. That's why we source our beef from the finest ranches and farms, ensuring that every cut is of the highest quality. And it's not just our steaks that are top-notch - our menu is filled with delicious appetizers, salads, and sides that are made with the freshest ingredients available. Come taste the difference for yourself at Jucius Steakcar.</p>
        </div>
        </div>
        
        <div className='videoContainer'>
            <video autoPlay loop muted playsInline width={"100%"} height={"auto"}>
                <source src={fireVideo} type="video/mp4" />
            </video>
        </div>

       <h2>Menu</h2> 
        <div className='menuContainer'>

            <div className="menuContainerFood">
                <h2>Food</h2>
            <h4>APPETIZERS:</h4>
            <ul>
                <li><b>Jucius Steak Bites:</b> Bite-sized pieces of our tender and juicy steak, served with a house-made horseradish sauce.</li>
                <li><b>Lobster Bisque:</b> A creamy and indulgent soup made with fresh lobster meat and garnished with chives.</li>
                <li><b>Truffle Fries:</b> Crispy french fries tossed in truffle oil and grated parmesan cheese.</li>
            </ul>
            <h4>ENTREES:</h4>
            <ul>
                <li><b>Grilled Atlantic Salmon:</b> Fresh salmon fillet seasoned with lemon and herbs, served with roasted vegetables and garlic mashed potatoes.</li>
                <li><b>Chicken Parmesan:</b> Breaded and fried chicken breast, topped with marinara sauce and melted mozzarella cheese, served with a side of spaghetti.</li>
                <li><b>Vegetarian Pasta:</b> Penne pasta tossed with seasonal vegetables and a light garlic cream sauce, topped with shaved parmesan cheese.</li>
            </ul>
            <h4>SALADS:</h4>
            <ul>
                <li><b>Classic Caesar Salad:</b> Crisp romaine lettuce, house-made croutons, and shaved parmesan cheese, tossed in our creamy Caesar dressing.</li>
                <li><b>Steakhouse Wedge Salad:</b> A wedge of iceberg lettuce topped with crispy bacon, cherry tomatoes, blue cheese crumbles, and our tangy blue cheese dressing.</li>
                <li><b>Beet Salad:</b> Roasted beets, goat cheese, and arugula, drizzled with a balsamic glaze.</li>
            </ul>
            <h4>STEAKS:</h4>
            <ul>
                <li><b>Filet Mignon:</b> The most tender cut of beef, cooked to your liking and served with your choice of side.</li>
                <li><b>Ribeye:</b> A flavorful cut of steak with marbling throughout, grilled to perfection and served with garlic mashed potatoes.</li>
                <li><b>New York Strip:</b> A classic steakhouse cut, served with sautéed mushrooms and onions.</li>
            </ul>
            <h4>DESSERTS:</h4>
            <ul>
                <li><b>Classic Cheesecake:</b> Creamy and indulgent cheesecake with a graham cracker crust, topped with fresh berries.</li>
                <li><b>Chocolate Lava Cake:</b> A warm and gooey chocolate cake with a molten chocolate center, served with vanilla ice cream.</li>
                <li><b>Crème Brûlée:</b> A classic French dessert with a caramelized sugar crust and a creamy vanilla custard filling.</li>
            </ul>
        </div>
        <div className='menuContainerDrink'>
            <h2>Drinks</h2>
        <h4>BEER:</h4>
            <ul>
                <li><b>Budweiser:</b> A classic American lager with a smooth and crisp finish.</li>
                <li><b>Stella Artois:</b> A Belgian pilsner with a light and refreshing taste.</li>
                <li><b>Lagunitas IPA:</b> A West Coast-style IPA with a hoppy and citrusy flavor.</li>
                <li><b>Guinness Stout:</b> An Irish stout with a rich and creamy texture and notes of chocolate and coffee.</li>
            </ul>
            <h4>WINE:</h4>
            <ul>
                <li><b>Cabernet Sauvignon: </b> A full-bodied red wine with flavors of black currant, blackberry, and vanilla.</li>
                <li><b>Chardonnay:</b> A medium to full-bodied white wine with flavors of green apple, citrus, and vanilla.</li>
                <li><b>Pinot Noir:</b> A light to medium-bodied red wine with flavors of cherry, raspberry, and earthy notes.</li>
                <li><b>Sauvignon Blanc:</b> A crisp and refreshing white wine with flavors of green apple, grapefruit, and grassy notes.</li>
            </ul>
            <h4>COCKTAILS:</h4>
            <ul>
                <li><b>Classic Martini:</b> Made with gin or vodka and a hint of dry vermouth, garnished with a lemon twist or olives.</li>
                <li><b>Old Fashioned:</b> Bourbon whiskey muddled with sugar, bitters, and a splash of water, garnished with a cherry and orange slice.</li>
                <li><b>Margarita:</b> Tequila, lime juice, and triple sec, served over ice and garnished with a salt rim and lime wedge.</li>
                <li><b>Manhattan:</b> Rye whiskey, sweet vermouth, and bitters, garnished with a cherry.</li>
            </ul>
            <h4>NON-ALCOHOLIC DRINKS:</h4>
            <ul>
                <li><b>Coke: </b> Classic cola with a refreshing and sweet taste.</li>
                <li><b>Lemonade:</b> Freshly squeezed lemon juice, sugar, and water, served over ice.</li>
                <li><b>Iced Tea: </b> Freshly brewed black tea served over ice with a slice of lemon.</li>
                <li><b>Root Beer:</b> A classic soda with a rich and creamy flavor.</li>
            </ul>
        </div>
        </div>
        </main>
        <div className='steakVideoContainer'>
            <video autoPlay loop muted playsInline width={"95%"} height={"auto"}>
                <source src={steakVideo} type="video/mp4" />
            </video>
        </div>
</div>
}