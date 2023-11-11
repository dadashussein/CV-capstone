import { createServer, Model } from "miragejs";
import { v4 as uuidv4 } from "uuid";

createServer({
  models: {
    education: Model,
    skill: Model,
  },

  routes() {
    this.namespace = "api";

    this.get("/educations", () => {
      return [
        {
          date: "2016",
          title: "National Aviation Academy",
          description:
            "I accepted in the National Aviation Academy in 2016 and successfully completed my studies  with high honors in 2020. My specialization was in Aviation Meteorology. During my time at the academy, I had the opportunity to gain practical experience at both Baku International Airport and Zabrat Airfield.",
        },
        {
          date: "2023",
          title: "EPAM UpSkills",
          description:
            "In 2022, with the support of IT Hub Azerbaijan, I successfully completed a 7-month Frontend Developer course at EPAM UpSkills.",
        },
        {
          date: "2023",
          title: "Holberton School",
          description:
            " In 2023, I was selected to Holberton School, where I am currently studying to become a Full Stack Software Engineer. I am currently working on projects using C, Python, Javascript, React, and Node.js.",
        },
      ];
    });

    this.get("/portfolio", () => {
      return [
        {
          id: 1,
          title: "Project 1",
          category: "ui",
          description: "This is the first project",
          img: "https://e-ticaret-dadas.s3.eu-north-1.amazonaws.com/ui.png",
          url: "https://e-ticaret-dadas.s3.eu-north-1.amazonaws.com/ui.png",
        },
        {
          id: 2,
          title: "Project 2",
          category: "ui",
          description: "This is the second project",
          img: "https://e-ticaret-dadas.s3.eu-north-1.amazonaws.com/ui.png",
          url: "https://e-ticaret-dadas.s3.eu-north-1.amazonaws.com/ui.png",
        },
        {
          id: 3,
          title: "Project 3",
          category: "code",
          description: "This is the third project",
          img: "https://e-ticaret-dadas.s3.eu-north-1.amazonaws.com/code.png",
          url: "https://e-ticaret-dadas.s3.eu-north-1.amazonaws.com/code.png",
        },
        {
          id: 4,
          title: "Project 4",
          category: "code",
          description: "This is the fourth project",
          img: "https://e-ticaret-dadas.s3.eu-north-1.amazonaws.com/code.png",
          url: "https://e-ticaret-dadas.s3.eu-north-1.amazonaws.com/code.png",
        },
      ];
    });

    this.get("/skills", () => {
      return [
        {
          id: 1,
          name: "C Programming",
          range: 90,
        },
        {
          id: 2,
          name: "Shell",
          range: 80,
        },
        {
          id: 3,
          name: "Linux",
          range: 80,
        },
        {
          id: 4,
          name: "Javascript",
          range: 99,
        },
        {
          id: 5,
          name: "React",
          range: 99,
        },
        {
          id: 6,
          name: "Node.js",
          range: 88,
        },
      ];
    });

    this.post("/skills", (schema, request) => {
      const newSkill = JSON.parse(request.requestBody);
      const id = uuidv4();
      newSkill.id = id;
      schema.db.skills.insert(newSkill);
      return newSkill;
    });
    this.delete("/skills", (schema, request) => {
      const { id } = request.queryParams;
      schema.db.skills.remove({ id });
      return id;
    });
  },
});
