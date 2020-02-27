This is a coding test submission by Sidney Ramos for the Front-end Developer position at Seven West Media.

The task was to create a responsive card component that looks like following image:

![Card](https://sidneyramos.github.io/seven-test/static/media/card.bec77b52.png)

**The requirements were:**

*   Use styled-components on a simple React view to accomplish that.
*   Develop unit tests using your preferred test framework.
*   Write a README.md with your assumptions, why did you pick that approach, what you could have done better if time was not a constraint.
*   Push code to Github and host a working demo of the solution using Github Pages.

**Assets provided:**

*   ![Card](https://sidneyramos.github.io/seven-test/static/media/card.bec77b52.png)
*   ![Background image](https://sidneyramos.github.io/seven-test/static/media/tile.25b4e634.jpg)
*   ![Logo](https://sidneyramos.github.io/seven-test/static/media/logo.2a3f011a.png)

**Assumptions:**

*   Looking at the outcome image, it can be derived that there are 2 major elements. The background image and the foreground element containing the logo and the text.
*   In terms of the font, [Seven Plus](https://7plus.com.au/) uses Montserrat which is a Google Font so we wouldn't come across any problems with purchasing fonts.
*   We can safely assume that the text and logo overlay is 25% or 1/4th of the overall height of the card.
*   Transparency of background of the overlay seems to be around 50%.

**Questions/Challenges:**

*   **Does the card have a hover state?**

    If we look at [Seven Plus](https://7plus.com.au/), one of Seven West Media's offerings, the layout is similar to Netflix wherein they display a grid of plain block images - no overlay whatsoever. It's only when you hover that either a.) more context is provided or b.) focus is exaggerated.

*   **Does the card have a mobile version?**

    When it comes to mobile, how do we present a collection of these card components? Do we crop it into a square so more cards can be viewed by the user, and present it as a plain grid? Or would leaving it as a rectangular shape and inserting it in a swipeable carousel be the better option?

*   **How do we preserve the aspect ratio of the background image?**

    When we create a card that doesn't fit the aspect ratio of the image (e.g. a square), how do we resize the component in such a way that we preserve the aspect ratio and still make the component look presentable?

**Approach:**

*   **Building an individual card component**
    *   Looking at the task at face value, there are 2 approaches that can be used for developing such a card:

        1.  `div` 
        
            `├── img (Background)`
            
            `└── div (Overlay)`
            
                  ├── img (Logo) 
                
                  └── h1 / p (Title)
                  
        2.  `div (set background-image)`
        
            `└── div (Overlay)`
            
                  ├── img (Logo)
                
                  └── h1 / p (Title)

        The second option is more intuitive and useful than the first because background-image is a lot easier to control than height, width and object-fit of an image element.

    *   Now that the DOM architecture has been settled, the next challenge is how to make sure the aspect ratio of the background is preserved regardless of width. I did a bit of research and found an interesting way to make a div preserve the aspect ratio involving padding. The link for said article can be found{" "} [here.](https://css-tricks.com/aspect-ratio-boxes/)
    *   The next and final challenge would be to find out how to resize the text such that it's still legible for any width. Initially, based on stock knowledge and experience I knew that media queries were the most obvious answer but I never liked how it kind of snapped whenever it transitioned into a different font size. So I did a bit of research and found a lightweight, dependency-free Javascript library called{" "} [Fitty](https://github.com/rikschennink/fitty) that resizes the text based on the parent container. All I had to do now was hook it up to the React component through the useEffect hook (the card component was purely functional so I lacked the component lifecycle syntax) and voila! Responsive text.
    *   _Side comment: The component is so responsive now that it actually looks as if it's just an image being resized. 😅_

**Possible Extensions:**

*   **Building an collection card grid**

      Due to time constraints, I could only focus on creating an individual card component. It would have been nice to demonstrate what would happen if you insert the card into a grid. But maybe that should be left for some other time.
      
**Testing Results:**

*   **Snapshot Testing**

      Due to time constraints, only limited testing was done. Snapshot Testing through Jest was done just to ensure that it renders correctly. If I had more time I would've been able to come up with more test cases.
