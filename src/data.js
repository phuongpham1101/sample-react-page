import hero from "./images/health_imagery.png";
import smile from "./images/smile.jpg";

const data = {
  menu: {
    primary: [
      {
        id: 'home',
        name: 'Home',
        link: '/',
      },
      {
        id: 'whatwedo',
        name: 'What we do',
        link: '/what-we-do',
      },
      {
        id: 'digitaldivide',
        name: 'The digital divide',
        link: '/the-digital-divide',
      },
      {
        id: 'getinvolved',
        name: 'Get involved',
        link: '/get-involved',
      },
      {
        id: 'ournetwork',
        name: 'Our network',
        link: '/our-network',
      },
      {
        id: 'insights',
        name: 'Insights',
        link: '/insights',
      },
    ],
    secondary: ['Learn', 'Donate']
  },
  home: {
    hero: {
      layout: "big",
      imgURL: hero,
      content: {
        header: "Get online week 2021",
        intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        cta: {
          url: "#",
          label: "Get involved now!"
        }
      }
    },
    textImagePanel: {
      img: {
        url: smile,
        alt: "Smile Lady"
      },
      content: {
        header: "We are a social change charity, helping people to improve their lives through digital.",
        intro: "We tackle the most pressing issues of our time, working with partners in thousands of communities across the UK and further afield",
        cta: {
          url: "#",
          label: "Learn more about us"
        }
      }
    },
    searchPanel: {
      person: ['an individual', 'a group'],
      action: ['to learn', 'to teach'],
      cta: {
        url: '#',
        label: 'Start now'
      }
    },
    blogs: [
      {
        id: "blog1",
        title: "Get online week",
        intro: "Lorem ipsum dolor sit amet",
        cta: "#"
      },
      {
        id: "blog2",
        title: "Learn my way",
        intro: "Lorem ipsum dolor sit amet",
        cta: "#"
      },
      {
        id: "blog3",
        title: "Make it click",
        intro: "Lorem ipsum dolor sit amet",
        cta: "#"
      },
      {
        id: "blog4",
        title: "Digital you",
        intro: "Lorem ipsum dolor sit amet",
        cta: "#"
      },
    ]
  },
  whatwedo: {
    hero: {
      layout: "small",
      content: {
        header: "What we do",
      }
    },
  }
}

export default data;