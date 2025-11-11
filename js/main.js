// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.getElementById('mobile-nav');
    nav.classList.toggle('active');
}

// Close mobile menu when clicking on links
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function() {
        const nav = document.getElementById('mobile-nav');
        nav.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const nav = document.getElementById('mobile-nav');
    const toggle = document.querySelector('.mobile-menu-toggle');
    const header = document.querySelector('.header-content');
    
    if (!header.contains(e.target)) {
        nav.classList.remove('active');
    }
});

// Pillar expansion functionality
function expandPillar(element, pillarType) {
    const pillarData = {
        technology: {
            title: "Technology & Innovation Framework",
            content: `
                <h4>Key Policy Areas:</h4>
                <ul>
                    <li><strong>AI Governance:</strong> Establish frameworks for responsible AI development and deployment</li>
                    <li><strong>Digital Infrastructure:</strong> Expand broadband access and 5G networks nationwide</li>
                    <li><strong>Cybersecurity:</strong> Strengthen national cyber resilience and public-private partnerships</li>
                    <li><strong>Innovation Ecosystem:</strong> Support R&D investment and tech talent development</li>
                </ul>
                <h4>Current Research Findings:</h4>
                <p>76% of Americans support increased federal investment in emerging technologies, with bipartisan agreement on the need for ethical AI guidelines and enhanced cybersecurity measures.</p>
                <h4>Policy Recommendations:</h4>
                <p>Implement a National Technology Strategy that balances innovation with security, establishes clear regulatory frameworks, and ensures equitable access to digital opportunities across all communities.</p>
            `
        },
        infrastructure: {
            title: "Infrastructure & Resilience Framework",
            content: `
                <h4>Key Policy Areas:</h4>
                <ul>
                    <li><strong>Physical Infrastructure:</strong> Modernize roads, bridges, and transportation systems</li>
                    <li><strong>Energy Grid:</strong> Build resilient, renewable energy infrastructure</li>
                    <li><strong>Water Systems:</strong> Upgrade aging water and wastewater infrastructure</li>
                    <li><strong>Climate Resilience:</strong> Prepare infrastructure for climate change impacts</li>
                </ul>
                <h4>Current Research Findings:</h4>
                <p>82% of Americans view infrastructure investment as essential, with strong support across party lines for modernization efforts that create jobs and improve competitiveness.</p>
                <h4>Policy Recommendations:</h4>
                <p>Launch a comprehensive infrastructure renewal program focused on resilience, sustainability, and job creation, with dedicated funding mechanisms and performance metrics.</p>
            `
        },
        labor: {
            title: "Labor & Workforce Framework",
            content: `
                <h4>Key Policy Areas:</h4>
                <ul>
                    <li><strong>Skills Training:</strong> Expand workforce development and retraining programs</li>
                    <li><strong>Worker Protections:</strong> Modernize labor standards for the gig economy</li>
                    <li><strong>Career Pathways:</strong> Create clear routes to middle-class careers</li>
                    <li><strong>Economic Security:</strong> Strengthen social safety nets for changing work patterns</li>
                </ul>
                <h4>Current Research Findings:</h4>
                <p>74% of Americans believe the government should help workers adapt to technological change, with broad support for skills training and portable benefits.</p>
                <h4>Policy Recommendations:</h4>
                <p>Establish a National Workforce Investment Strategy that provides lifelong learning opportunities, portable benefits, and clear pathways to economic advancement.</p>
            `
        },
        education: {
            title: "Education & Learning Framework",
            content: `
                <h4>Key Policy Areas:</h4>
                <ul>
                    <li><strong>K-12 Innovation:</strong> Modernize curriculum and teaching methods</li>
                    <li><strong>Higher Education:</strong> Make college more affordable and relevant</li>
                    <li><strong>Lifelong Learning:</strong> Support continuous skill development</li>
                    <li><strong>Civic Education:</strong> Strengthen democratic knowledge and engagement</li>
                </ul>
                <h4>Current Research Findings:</h4>
                <p>79% of Americans believe education reform is critical for competitiveness, with strong support for both traditional academic excellence and practical skills training.</p>
                <h4>Policy Recommendations:</h4>
                <p>Implement comprehensive education modernization that emphasizes both academic achievement and practical skills, with increased investment in teacher training and educational technology.</p>
            `
        },
        regional: {
            title: "Regional Development Framework",
            content: `
                <h4>Key Policy Areas:</h4>
                <ul>
                    <li><strong>Rural Revitalization:</strong> Support rural economic diversification and growth</li>
                    <li><strong>Urban Innovation:</strong> Enhance city competitiveness and livability</li>
                    <li><strong>Regional Connectivity:</strong> Improve transportation and digital links</li>
                    <li><strong>Local Capacity:</strong> Strengthen local governance and civic institutions</li>
                </ul>
                <h4>Current Research Findings:</h4>
                <p>68% of Americans believe federal policy should support both urban and rural development, with recognition that strong regions contribute to national prosperity.</p>
                <h4>Policy Recommendations:</h4>
                <p>Create place-based development strategies that leverage regional strengths, improve connectivity, and ensure all communities can participate in economic growth.</p>
            `
        },
        economic: {
            title: "Economic & Industrial Policy Framework",
            content: `
                <h4>Key Policy Areas:</h4>
                <ul>
                    <li><strong>Industrial Strategy:</strong> Support key manufacturing and technology sectors</li>
                    <li><strong>Trade Policy:</strong> Balance free trade with strategic interests</li>
                    <li><strong>Supply Chain Resilience:</strong> Reduce critical dependencies</li>
                    <li><strong>Innovation Investment:</strong> Fund R&D and emerging technologies</li>
                </ul>
                <h4>Current Research Findings:</h4>
                <p>72% of Americans support strategic government investment in key industries, with bipartisan agreement on the need for supply chain resilience and innovation leadership.</p>
                <h4>Policy Recommendations:</h4>
                <p>Develop a comprehensive economic strategy that combines market mechanisms with strategic government investment to ensure American competitiveness and resilience.</p>
            `
        },
        governance: {
            title: "Governance & Institutions Framework",
            content: `
                <h4>Key Policy Areas:</h4>
                <ul>
                    <li><strong>Government Effectiveness:</strong> Modernize federal agencies and processes</li>
                    <li><strong>Democratic Participation:</strong> Enhance voter access and civic engagement</li>
                    <li><strong>Transparency:</strong> Improve government accountability and openness</li>
                    <li><strong>Federal-State Relations:</strong> Clarify roles and improve coordination</li>
                </ul>
                <h4>Current Research Findings:</h4>
                <p>77% of Americans want government to be more effective and responsive, with broad support for modernization efforts that improve service delivery and accountability.</p>
                <h4>Policy Recommendations:</h4>
                <p>Launch comprehensive government modernization focused on effectiveness, transparency, and citizen engagement, with clear performance metrics and accountability measures.</p>
            `
        }
    };

    if (pillarData[pillarType]) {
        showModal(pillarData[pillarType].title, pillarData[pillarType].content);
    }
}

// Modal functionality
function showModal(title, content) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-content').innerHTML = content;
    
    const backdrop = document.getElementById('modal-backdrop');
    const modal = document.getElementById('generic-modal');
    
    backdrop.style.display = 'block';
    modal.style.display = 'block';
    
    requestAnimationFrame(() => {
        backdrop.style.opacity = '1';
        modal.style.opacity = '1';
        modal.style.transform = 'translate(-50%, -50%) scale(1)';
    });
}

function closeModal() {
    const backdrop = document.getElementById('modal-backdrop');
    const modal = document.getElementById('generic-modal');
    
    backdrop.style.opacity = '0';
    modal.style.opacity = '0';
    modal.style.transform = 'translate(-50%, -50%) scale(0.9)';
    
    setTimeout(() => {
        backdrop.style.display = 'none';
        modal.style.display = 'none';
    }, 300);
}

// Modal content functions
function showResearchModal() {
    showModal("Latest Research Findings", `
        <h4>Recent Studies:</h4>
        <div style="margin-bottom: 1.5rem;">
            <h5>Cross-Party Policy Preferences (2024)</h5>
            <p>Our comprehensive survey of 2,000+ Americans reveals surprising consensus on key policy priorities, with 70% finding common ground on infrastructure, education, and economic opportunity.</p>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <h5>Regional Economic Resilience Report</h5>
            <p>Analysis of regional economic trends and policy needs across different geographic areas, highlighting successful models for local development.</p>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <h5>Technology & Democratic Participation Study</h5>
            <p>Examining how digital tools can enhance civic engagement while protecting democratic values and privacy rights.</p>
        </div>
        <p><strong>Download full reports and datasets from our research portal.</strong></p>
    `);
}

function showEngagementModal() {
    showModal("Get Involved", `
        <h4>Join Our Community:</h4>
        <div style="margin-bottom: 1.5rem;">
            <h5>Policy Working Groups</h5>
            <p>Participate in focused discussions on specific policy areas with experts and fellow citizens.</p>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <h5>Local Forums</h5>
            <p>Attend or organize community discussions on national issues and local solutions.</p>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <h5>Research Participation</h5>
            <p>Contribute to our ongoing research through surveys, interviews, and focus groups.</p>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <h5>Content Contribution</h5>
            <p>Share your expertise through policy briefs, analysis, and commentary.</p>
        </div>
        <p><strong>Contact us to learn more about engagement opportunities in your area.</strong></p>
    `);
}

function showPolicyModal() {
    showModal("Policy Brief Library", `
        <h4>Latest Policy Briefs:</h4>
        <div style="margin-bottom: 1rem;">
            <h5>Modernizing American Infrastructure</h5>
            <p>A comprehensive framework for 21st-century infrastructure investment</p>
        </div>
        <div style="margin-bottom: 1rem;">
            <h5>AI Governance and Democratic Values</h5>
            <p>Balancing innovation with ethical considerations and public oversight</p>
        </div>
        <div style="margin-bottom: 1rem;">
            <h5>Workforce Development for the Digital Economy</h5>
            <p>Preparing American workers for economic transformation</p>
        </div>
        <div style="margin-bottom: 1rem;">
            <h5>Regional Development Strategies</h5>
            <p>Supporting economic growth across urban and rural communities</p>
        </div>
        <p><strong>Access our full library of policy analysis and recommendations.</strong></p>
    `);
}

function subscribeNewsletter() {
    const email = document.getElementById('newsletter-email').value;
    if (email && email.includes('@')) {
        showModal("Thank You!", `
            <p>Thank you for subscribing to The Meridian Accord newsletter!</p>
            <p>You'll receive our latest research findings, policy briefs, and insights on building common ground in American politics.</p>
            <p>We respect your privacy and will never share your email address.</p>
        `);
        document.getElementById('newsletter-email').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
}

function showPrivacyModal() {
    showModal("Privacy Policy", `
        <h4>Your Privacy Matters:</h4>
        <p>The Meridian Accord is committed to protecting your privacy and personal information.</p>
        <h4>What We Collect:</h4>
        <ul>
            <li>Email addresses for newsletter subscriptions</li>
            <li>Survey responses for research purposes</li>
            <li>Website usage analytics (anonymized)</li>
        </ul>
        <h4>How We Use Information:</h4>
        <p>We use your information solely for research, communication, and improving our services. We never sell or share personal data with third parties.</p>
        <p>You can unsubscribe from communications or request data deletion at any time.</p>
    `);
}

function showTermsModal() {
    showModal("Terms of Service", `
        <h4>Terms of Use:</h4>
        <p>By using this website, you agree to these terms and conditions.</p>
        <h4>Acceptable Use:</h4>
        <ul>
            <li>Respectful, civil discourse in all interactions</li>
            <li>No harassment, hate speech, or personal attacks</li>
            <li>Factual accuracy in contributed content</li>
            <li>Respect for intellectual property rights</li>
        </ul>
        <h4>Content Policy:</h4>
        <p>We welcome diverse viewpoints but maintain standards for respectful dialogue and factual accuracy. Content may be moderated to ensure quality discussions.</p>
    `);
}

// Keyboard navigation for modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.stat-card, .mission-card, .pillar-card, .moment-card');
    animateElements.forEach(el => observer.observe(el));
});
```

**Summary of your file structure:**
```
your-repo/
├── _includes/
│   └── base.njk          (layout template with header/footer)
├── css/
│   └── styles.css        (all styling)
├── js/
│   └── main.js           (all interactive functionality)
└── index.njk             (homepage content)
