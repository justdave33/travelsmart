import { AiFillStar } from "react-icons/ai";
export const reviews = [
    {
        id: 1,
        image: "https://img.freepik.com/free-photo/portrait-african-american-man_23-2149072178.jpg?t=st=1727121350~exp=1727124950~hmac=fbaf3ffce1afeda4ac2c6c09a5a28b240465fef02d76fe2b7991a48abab1ba3b&w=1380",
        username: 'John Doe',
        star: <AiFillStar className="rating-star" />,
        rating: 4,
        review: "Excellent service! I was able to quickly book a last-minute flight for a great price. The customer support team was incredibly helpful when I had to change my flight date due to a personal emergency. The website is also mobile-friendly, making it easy to book while on the go."
    },
    {
        id: 2,
        image: "https://img.freepik.com/free-photo/young-female-denim-clothes-lying-usa-flag_23-2148167051.jpg?t=st=1727121516~exp=1727125116~hmac=cd91faef2e85c88a1c2768a2cbf60d8cae544c394fd6ea8a53d17913f5e783ca&w=1380",
        username: 'Emily Watson',
        rating: 5,
        star: <AiFillStar className="rating-star" />,
        review: 'I recently had the most incredible trip to Bali, Indonesia, thanks to Travel Smart. From the moment I contacted their team, they were incredibly helpful and attentive. They created a personalized itinerary that perfectly matched my interests and budget.'
    },

    {
        id: 2,
        image: "https://img.freepik.com/free-photo/smiling-man-white-t-shirt-gray-background_23-2148113914.jpg?t=st=1727121598~exp=1727125198~hmac=6c6c52193181bea2b3a16893d9923816242b8409b2660765e7a8158b8372c8c7&w=740",
        username: 'Jane Smith',
        rating: 5,
        star: <AiFillStar className="rating-star" />,
        review: "The flight options were decent, and the booking process was fairly straightforward. However, I found the website a bit slow at times, especially when searching for flights. Additionally, I would have liked more flexibility with filtering flight times. The experience was okay, but there’s room for improvement."
    },


];