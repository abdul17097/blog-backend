const express = require("express");
const { createTag, allTags } = require("../controllers/tag.js");
const { verifyUser } = require("../middleware/veryUser.js");
const router = express.Router();

router.post("/create", verifyUser, createTag);
router.get("/all-tags", allTags);

module.exports = router;
