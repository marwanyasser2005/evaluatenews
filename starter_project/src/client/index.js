// Import JavaScript Modules
import { handleSubmit } from './js/formHandler';

// Import CSS files
import './styles/resets.css';
import './styles/base.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/form.css';

// Event Listener for Form Submission
document.getElementById('newsForm').addEventListener('submit', handleSubmit);
