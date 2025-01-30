document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDiv = document.getElementById('result');
    const serviceTypeSelect = document.getElementById('service-type');
    const areaInput = document.getElementById('area');

    const priceIndex = {
        maintenance: 0.10, // $0.10 per sq ft
        planting: 0.20, // $0.20 per sq ft
        cleanup: 0.15,  // $0.15 per sq ft
        pavers: 0.40, // $0.40 per sq ft
        gardenbeds: 0.30, // $0.30 per sq ft
        bushtrimming: 0.25, // $0.25 per sq ft
    };

    calculateBtn.addEventListener('click', function () {
        const serviceType = serviceTypeSelect.value;
        const area = parseFloat(areaInput.value);

        if (!serviceType || isNaN(area) || area <= 0) {
            resultDiv.textContent = 'Please enter a valid service type and area.';
            return;
        }

        const pricePerSqFt = priceIndex[serviceType];
        if (pricePerSqFt) {
            const estimate = (area * pricePerSqFt).toFixed(2);
            resultDiv.textContent = `Estimated cost: $${estimate}`;
        } else {
            resultDiv.textContent = 'Invalid service type.';
        }
    });
});
