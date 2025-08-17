import { Router } from 'express';
import {
  getAllContactsController,
  getContactByIdController,
  createContactController,
  updateContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactsSchema,
  updateContactsSchema,
} from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();


router.get('/contacts', getAllContactsController);
router.get('/contacts/:contactId', isValidId, getContactByIdController);

router.post(
  '/contacts',
  validateBody(createContactsSchema),
  createContactController,
);

router.patch(
  '/contacts/:contactId',
  isValidId,
  validateBody(updateContactsSchema),
  updateContactController,
);

router.delete('/contacts/:contactId', isValidId, deleteContactController);

export default router;