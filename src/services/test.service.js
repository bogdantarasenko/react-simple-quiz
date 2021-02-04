import { mockedRequestHandler } from "../utils/mockedRequestHandler";

const data = [
    {
        question: "Какого цвета небо?",
        rightAnswerId: 1,
        id: 1,
        image: 'https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/cumulus-cloud.jpg',
        answers: [
            { text: "Голубое", id: 1 },
            { text: "Черное", id: 2 },
            { text: "Красное", id: 3 },
            { text: "Коричневое", id: 4 }
        ]
    },
    {
        question: "Небо голубое?",
        rightAnswerId: 1,
        id: 2,
        answers: [
            { text: "Да", id: 1 },
            { text: "Нет", id: 2 }
        ]
    }
];

const TestService = {
    async getOne() {
        return mockedRequestHandler(data)
    },
};

export default TestService
