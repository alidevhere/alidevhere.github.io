function calculateExperience() {
    const experienceDates = [
        {
            start: new Date('2023-03-01'), // Principal Software Engineer
            end: new Date()
        },
        {
            start: new Date('2022-04-01'), // Software Engineer
            end: new Date('2023-03-01')
        },
        {
            start: new Date('2022-01-01'), // Associate Software Engineer
            end: new Date('2022-03-01')
        },
        {
            start: new Date('2020-12-01'), // Freelance Software Engineer
            end: new Date('2022-01-01')
        }
    ];

    let totalMonths = 0;
    experienceDates.forEach(period => {
        const months = (period.end.getFullYear() - period.start.getFullYear()) * 12 + 
                      (period.end.getMonth() - period.start.getMonth());
        totalMonths += months;
    });

    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;

    const experienceText = `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    document.getElementById('experienceCounter').textContent = experienceText;
}

// Calculate initially
calculateExperience();

// Update every day
setInterval(calculateExperience, 24 * 60 * 60 * 1000); 