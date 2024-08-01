
// // app.post('/users', (req, res) => {
// //     const user = req.body;
// //     const babu = 'INSERT INTO users (name, email) VALUES (?, ?)';
// //     // Use an array with the user properties
// //     db.query(babu, [user.name, user.email], (err, result) => {
// //         if (err) throw err;
// //         const token = CreateToken(user.id)
// //         // res.send('User added...');
// //         // res.status(200).json([user])
// //         // res.status(200).json({message:"user add sucessfully",user})
// //         res.status(200).json({user,token})
// //     });
// // });

// // Read - GET request to fetch all users
// app.get('/users', (req, res) => {
//     const sql = 'SELECT * FROM users';
//     db.query(sql, (err, results) => {
//         if (err) throw err;
//         res.json(results);
//     });
// });

// // Update - PUT request to update a user
// app.put('/users/:id', (req, res) => {
//     const { id } = req.params;
//     const user = req.body;
//     const sql = 'UPDATE users SET ? WHERE id = ?';
//     db.query(sql, [user, id], (err, result) => {
//         if (err) throw err;
//         res.send('User updated...');
//     });
// });

// // Delete - DELETE request to delete a user
// app.delete('/users/:id', (req, res) => {
//     const { id } = req.params;
//     const sql = 'DELETE FROM users WHERE id = ?';
//     db.query(sql, id, (err, result) => {
//         if (err) throw err;
//         res.send('User deleted...');
//     });
// });