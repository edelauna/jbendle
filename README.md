# Jen Bendle Portfolio Website

Source-code for Porfolio Website.

## Modifying # Works section

1. Open the `src/components/work/data/work.tsx` file
2. Copy one of the existing objects in the `works` array
3. Paste the copied object immediately as the last item in the `works` array
4. Replace the title string with the title of the film
5. Replace the description string with a brief description of the film (optional)
6. Replace the src string with the URL of your video, followed by ?autoplay=0 (the autoplay=0 parameter prevents the video from automatically playing when the page is loaded)
7. Save the file

Here's an example of what a new object might look like once it's been added to the works array:

```tsx
{
    title: "My Awesome Project",
    description: "A description of my awesome project",
    src: "https://www.youtube.com/embed/abcdefghijklmnop?autoplay=0"
}
```
