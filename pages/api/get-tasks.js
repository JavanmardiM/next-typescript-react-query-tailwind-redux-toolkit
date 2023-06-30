const tasks = [
  { title: "This is a task for Day 12", id: "1", day: "12" },
  { title: "This is a task for Day 26", id: "2", day: "26" },
];
function getAllTasks(req, res) {
  if (req.method === "GET") {
    res.status("200").json(tasks);
  }
}

export default getAllTasks;
