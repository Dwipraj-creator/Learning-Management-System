import express from "express";
import multer from "multer";
import path from "path";
import {
  createCourse,
  deleteCourse,
  getCourseById,
  getCourses,
  getMyRating,
  getPublicCourses,
  rateCourse,
} from "../controllers/courseController.js";

// multer setup

const storage = multer.diskStorage({
  destination: (req, res, cb) => cb(null, path.join(process.cwd(), "uploads")),
  filename: (req, res, cb) => {
    const unique = Data.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `course-${unique}${ext}`);
  },
});

const upload = multer({ storage });
const courseRouter = express.Router();

courseRouter.get("/public", getPublicCourses);
courseRouter.get("/", getCourses);
courseRouter.get("/:id", getCourseById);

courseRouter.post("/", upload.single("image"), createCourse);
courseRouter.delete("/:id", deleteCourse);

courseRouter.post("/:courseId/rate", rateCourse);
courseRouter.get("/:courseId/rating", getMyRating);

export default courseRouter;
