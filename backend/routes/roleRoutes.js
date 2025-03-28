//routes/roleRoutes.js
const express = require('express');
const { getAllRoles, createRole, assignRoleToUser } = require('../controllers/roleController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

// Obtener todos los roles
router.get('/', authMiddleware, roleMiddleware(['SuperAdmin']), getAllRoles);

// Crear un nuevo rol
router.post('/', authMiddleware, roleMiddleware(['SuperAdmin']), createRole);

// Asignar un rol a un usuario
router.put('/assign', authMiddleware, roleMiddleware(['SuperAdmin']), assignRoleToUser);

module.exports = router;
