const bcrypt = require("bcrypt");

const service = require("../services/auth.service");

const { generateToken } = require("../utils/jwt");