import { Component } from '@angular/core';

interface NewsTipCard {
  title: string;
  content: string;
  readMore: boolean;
  imageUrl: string; // Add the imageUrl property here
}

@Component({
  selector: 'app-newstips',
  templateUrl: './newstips.component.html',
  styleUrls: ['./newstips.component.css']
})
export class NewstipsComponent {
  newsTips: NewsTipCard[] = [
    {
      title: 'How to store spices to maintain the best flavor possible?',
      content: 'One of the most common places to store spices, though, is a cabinet or shelf above or next to the oven. That’s okay as long as it doesn’t get too hot especially as keeping them handy will make it more likely that you use them.',
      readMore: false,
      imageUrl: 'assets/Pictures/News & Tips/spices.jpeg'
    },    
    {
      title: 'Burger King Is Giving Away Free Fries for the Rest of the Year',
      content: 'This deal can be used once a week, and you have to add the discount offer to your cart before ordering. That’s not too shabby of a deal, considering that it’s valid through the end of December 2023. That means you can still redeem this offer 24 more times before it expires. To get the deal, download the BK app or visit the Burger King website and click “Sign Up” to join Royal Perks (or log in if you’re already a member). Then, select “Order Pickup” and add your desired items to your cart. Go to the “Offers” section to see the free fry deal. Add the deal (be sure to change the size if you want a larger one), pay, and get ready to pick up your order. ',
      readMore: false,
      imageUrl: 'assets/Pictures/News & Tips/burger king.png'
    },     
    {
      title: 'Summer Grilling Tips',
      content: 'Get ready for the summer with our top grilling tips and techniques. Learn how to make the perfect juicy burgers and mouthwatering kebabs.',
      readMore: false,
      imageUrl: 'assets/Pictures/News & Tips/Khozi Kebab.jpg'
    },     
    {
      title: 'The 45+ Best Amazon Prime Day Deals for Your Kitchen',
      content: 'You dont want to miss out on this summers biggest sale. The savings event ends till the end of summer.Shop these top notch deals before it all ends.',
      readMore: false,
      imageUrl: 'assets/Pictures/News & Tips/Kichten tools.jpg'
    }, 
    {
      title: 'Do Pickles Go Bad?',
      content: 'The first step in assessing whether your pickles are past the point of no return is to take a look at the container. If the lid is bowed or distended, thats a telltale sign of bacterial activity, and the pickles should be thrown out. Once you open them, if you see any mold or odd things floating on the brines surface, or if the brine suddenly goes cloudy, thats a good indicator that something is wrong and its time to discard the jar. Make sure to give them a sniff, even though pickles already have a strong smell; if you notice a funkier scent or anything that smells rotten, throw them away immediately.',
      readMore: false,
      imageUrl: 'assets/Pictures/News & Tips/pickles.jpg'
    }, 
    {
      title: 'Is the Hot Water in My Dishwasher Really Hot Enough to Kill Bacteria?',
      content: 'The temperature of the hot water in your dishwasher plays a crucial role in eliminating bacteria effectively. Modern dishwashers are designed to maintain water temperatures between 120°F (49°C) and 140°F (60°C) during the wash cycle. At these high temperatures, most common bacteria, germs, and pathogens cannot survive and are effectively killed. The combination of hot water and detergent works in tandem to sanitize your dishes and ensure they are safe for use. However, its essential to follow the manufacturers guidelines and use appropriate detergents to optimize the dishwashers cleaning efficiency and maintain a bacteria-free environment for your dishes.',
      readMore: false,
      imageUrl: 'assets/Pictures/News & Tips/dishwasher.jpg'
    }, 
    // Add more news and tips objects with their respective imageUrls
  ];

  toggleReadMore(card: NewsTipCard) {
    card.readMore = !card.readMore;
  }
}
