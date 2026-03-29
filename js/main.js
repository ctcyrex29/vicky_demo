// Minimal JS: set year, handle demo contact form and mailto booking form
document.addEventListener('DOMContentLoaded', function() {
	var y = document.getElementById('year');
	if (y) y.textContent = new Date().getFullYear();

	var form = document.getElementById('contactForm');
	if (form) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			alert('Demo only: this form is a placeholder. Replace with a server endpoint or form provider.');
			form.reset();
		});
	}

	// Booking form: construct a mailto: link and open user's mail client
	var booking = document.getElementById('bookingForm');
	if (booking) {
		booking.addEventListener('submit', function(e) {
			e.preventDefault();
			var to = 'info@vickytheviolinist.example'; // replace with real booking email
			var data = new FormData(booking);
			var name = data.get('name') || '';
			var email = data.get('email') || '';
			var phone = data.get('phone') || '';
			var eventType = data.get('eventType') || '';
			var eventDate = data.get('eventDate') || '';
			var eventTime = data.get('eventTime') || '';
			var location = data.get('location') || '';
			var duration = data.get('duration') || '';
			var message = data.get('message') || '';

			var subject = encodeURIComponent('Booking inquiry: ' + eventType + (eventDate ? ' — ' + eventDate : ''));
			var bodyLines = [];
			bodyLines.push('Name: ' + name);
			bodyLines.push('Email: ' + email);
			bodyLines.push('Phone: ' + phone);
			bodyLines.push('Event type: ' + eventType);
			bodyLines.push('Event date: ' + eventDate);
			bodyLines.push('Event time: ' + eventTime);
			bodyLines.push('Location: ' + location);
			bodyLines.push('Approx. duration: ' + duration);
			bodyLines.push('');
			bodyLines.push('Message / special requests:');
			bodyLines.push(message);

			var body = encodeURIComponent(bodyLines.join('\n'));
			var mailto = 'mailto:' + to + '?subject=' + subject + '&body=' + body;

			// Open mail client
			window.location.href = mailto;
			booking.reset();
		});
	}

});