import { Op } from 'sequelize';

import Appointment from '../models/Appointment';
import User from '../models/User';

class ScheduleController {
  async index(req, res) {
    const checkUserProvider = await User.findOne({
      where: {
        id: req.userId,
        provider: true,
      },
    });

    if (!checkUserProvider) {
      res.status(401).json({ error: 'User is not a provider. ' });
    }

    const { date } = req.query;

    const appointments = await Appointment.findAll({
      where: {
        date,
        provider_id: req.userId,
      },
    });

    return res.json(appointments);
  }
}

export default new ScheduleController();
