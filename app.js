// Application data with updated terminology
const data = {
  title_line_1: "Kind Oasis Chatbot Implementation",
  title_line_2: "Case Study",
  subtitle: "Comprehensive evaluation of VanChat implementation, performance metrics, and business impact",
  period: "May-July 2025",
  hero_metrics: {
    sales_growth: {
      value: 83,
      period: "May-July 2025",
      currency_growth: {
        from: 9885,
        to: 18084
      }
    },
    add_to_cart_rate: {
      value: 28.6,
      comparison: "4.3x industry average"
    },
    chatbot_conversion: {
      value: 21.1
    }
  },
  key_metrics_comparison: {
    month_1: {
      total_sales: 9885,
      daily_average: 329,
      chatbot_interactions: 710,
      total_visitors: 14125,
      add_to_cart_rate: 21.55,
      chatbot_conversion_rate: 18.17,
      customers_acquired: 129,
      add_to_cart_actions: 481
    },
    month_2: {
      total_sales: 18084,
      daily_average: 603,
      chatbot_interactions: 1104,
      total_visitors: 20916,
      add_to_cart_rate: 33.15,
      chatbot_conversion_rate: 22.74,
      customers_acquired: 251,
      add_to_cart_actions: 1118
    },
    growth_rates: {
      sales_growth: 83.0,
      add_to_cart_actions: 132.4,
      chatbot_interactions: 55.5,
      conversion_rate: 25.2,
      traffic_growth: 48.1,
      customer_acquisition: 94.6
    }
  },
  industry_benchmarks: {
    vanchat_performance: {
      add_to_cart_rate: 28.6,
      chatbot_interaction_rate: 5.17,
      chatbot_conversion_rate: 21.07
    },
    industry_averages: {
      add_to_cart_rate: 6.61,
      chatbot_interaction_rate: 8.5,
      chatbot_conversion_rate: 15.0
    }
  },
  methodology: [
    "Data Collection from VanChat dashboard",
    "Month Comparison between 30-day periods",
    "Benchmark Research from industry sources",
    "Comparative Analysis against standards",
    "Predictive Modeling for future performance",
    "Strategic Assessment and recommendations"
  ],
  key_achievements: [
    "83% sales growth between months",
    "4.3x higher add-to-cart rates than industry average",
    "Top-tier chatbot conversion performance at 21.07%",
    "55.5% increase in chatbot interactions",
    "132.4% increase in add-to-cart actions"
  ],
  dark_mode_colors: {
    page_background: "#052839",
    card_background: "#0A3A62",
    text_primary: "#FFFFFF",
    text_secondary: "#B2BCCA",
    accent_primary: "#219CDB",
    accent_secondary: "#81CFFE",
    button_background: "#219CDB",
    button_text: "#FFFFFF",
    border_color: "#297BAF",
    shadow_color: "rgba(0, 0, 0, 0.3)"
  }
};

// Chart colors optimized for dark mode
const chartColors = ['#219CDB', '#81CFFE', '#297BAF', '#B2BCCA', '#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545'];

// Global variables
let salesChart = null;
let animationObserver = null;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  setupProgressIndicator();
  setupAnimatedCounters();
  setupScrollAnimations();
  setupProgressBars();
  setupCharts();
  setupBenchmarkBars();
}

// Navigation functionality
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Handle navigation clicks
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Update active navigation on scroll
  window.addEventListener('scroll', throttle(updateActiveNavigation, 100));
}

function updateActiveNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// Progress indicator
function setupProgressIndicator() {
  const progressBar = document.querySelector('.progress-bar');
  window.addEventListener('scroll', throttle(() => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  }, 50));
}

// Animated counters
function setupAnimatedCounters() {
  const counterElements = document.querySelectorAll('.metric-number');
  let countersAnimated = false;
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.5 });
  
  if (counterElements.length > 0) {
    counterObserver.observe(counterElements[0].closest('.hero-metrics'));
  }
}

function animateCounters() {
  const counterElements = document.querySelectorAll('.metric-number');
  
  counterElements.forEach(element => {
    const target = parseFloat(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      // Format number based on whether it has decimals
      if (target % 1 === 0) {
        element.textContent = Math.floor(current);
      } else {
        element.textContent = current.toFixed(1);
      }
    }, 16);
  });
}

// Scroll animations
function setupScrollAnimations() {
  animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.1 });
  
  // Observe elements for fade-in animation
  const animationTargets = document.querySelectorAll('.method-step, .comparison-card, .growth-card, .achievement-card');
  animationTargets.forEach(target => {
    animationObserver.observe(target);
  });
}

// Progress bars animation
function setupProgressBars() {
  const progressBars = document.querySelectorAll('.progress-bar-fill');
  
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        const width = progressBar.getAttribute('data-width');
        setTimeout(() => {
          progressBar.style.width = width + '%';
        }, 200);
      }
    });
  }, { threshold: 0.5 });
  
  progressBars.forEach(bar => {
    progressObserver.observe(bar);
  });
}

// Benchmark bars animation
function setupBenchmarkBars() {
  const benchmarkBars = document.querySelectorAll('.benchmark-fill');
  
  const benchmarkObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const benchmarkBar = entry.target;
        const width = benchmarkBar.getAttribute('data-width');
        setTimeout(() => {
          benchmarkBar.style.width = width + '%';
        }, 300);
      }
    });
  }, { threshold: 0.5 });
  
  benchmarkBars.forEach(bar => {
    benchmarkObserver.observe(bar);
  });
}

// Charts setup
function setupCharts() {
  setupSalesChart();
  setupChartControls();
}

function setupSalesChart() {
  const ctx = document.getElementById('salesChart');
  if (!ctx) return;
  
  salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Month 1', 'Month 2'],
      datasets: [{
        label: 'Total Sales ($)',
        data: [data.key_metrics_comparison.month_1.total_sales, data.key_metrics_comparison.month_2.total_sales],
        backgroundColor: [chartColors[0], chartColors[1]],
        borderColor: [chartColors[0], chartColors[1]],
        borderWidth: 2,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: data.dark_mode_colors.page_background,
          titleColor: data.dark_mode_colors.text_primary,
          bodyColor: data.dark_mode_colors.text_primary,
          borderColor: data.dark_mode_colors.accent_primary,
          borderWidth: 1,
          titleFont: {
            size: 14,
            weight: 'bold'
          },
          bodyFont: {
            size: 13
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: data.dark_mode_colors.border_color,
            drawBorder: false
          },
          ticks: {
            color: data.dark_mode_colors.text_primary,
            font: {
              size: 12,
              weight: '500'
            },
            callback: function(value) {
              return '$' + value.toLocaleString();
            }
          }
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            color: data.dark_mode_colors.text_primary,
            font: {
              size: 12,
              weight: '500'
            }
          }
        }
      },
      animation: {
        duration: 1500,
        easing: 'easeOutQuart'
      }
    }
  });
}

function setupChartControls() {
  const chartButtons = document.querySelectorAll('.chart-btn');
  
  chartButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      chartButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');
      
      // Update chart data
      const chartType = this.getAttribute('data-chart');
      updateSalesChart(chartType);
    });
  });
}

function updateSalesChart(type) {
  if (!salesChart) return;
  
  let chartData, yAxisCallback, yAxisLabel;
  
  switch(type) {
    case 'sales':
      chartData = {
        labels: ['Month 1', 'Month 2'],
        datasets: [{
          label: 'Total Sales ($)',
          data: [data.key_metrics_comparison.month_1.total_sales, data.key_metrics_comparison.month_2.total_sales],
          backgroundColor: [chartColors[0], chartColors[1]],
          borderColor: [chartColors[0], chartColors[1]],
          borderWidth: 2,
          borderRadius: 8
        }]
      };
      yAxisCallback = (value) => '$' + value.toLocaleString();
      yAxisLabel = 'Sales Amount ($)';
      break;
      
    case 'daily':
      chartData = {
        labels: ['Month 1', 'Month 2'],
        datasets: [{
          label: 'Daily Average ($)',
          data: [data.key_metrics_comparison.month_1.daily_average, data.key_metrics_comparison.month_2.daily_average],
          backgroundColor: [chartColors[2], chartColors[3]],
          borderColor: [chartColors[2], chartColors[3]],
          borderWidth: 2,
          borderRadius: 8
        }]
      };
      yAxisCallback = (value) => '$' + value.toLocaleString();
      yAxisLabel = 'Daily Average ($)';
      break;
      
    case 'customers':
      chartData = {
        labels: ['Month 1', 'Month 2'],
        datasets: [{
          label: 'Customers Acquired',
          data: [data.key_metrics_comparison.month_1.customers_acquired, data.key_metrics_comparison.month_2.customers_acquired],
          backgroundColor: [chartColors[4], chartColors[5]],
          borderColor: [chartColors[4], chartColors[5]],
          borderWidth: 2,
          borderRadius: 8
        }]
      };
      yAxisCallback = (value) => value.toLocaleString();
      yAxisLabel = 'Number of Customers';
      break;
      
    default:
      return;
  }
  
  // Update chart data
  salesChart.data = chartData;
  
  // Update y-axis callback
  salesChart.options.scales.y.ticks.callback = yAxisCallback;
  
  // Force chart update with animation
  salesChart.update('show');
}

// Utility functions
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Method step interactions
document.addEventListener('DOMContentLoaded', function() {
  const methodSteps = document.querySelectorAll('.method-step');
  
  methodSteps.forEach(step => {
    step.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px) scale(1.02)';
    });
    
    step.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(-2px) scale(1)';
    });
    
    step.addEventListener('click', function() {
      // Add a subtle pulse effect
      this.style.animation = 'pulse 0.6s ease-in-out';
      setTimeout(() => {
        this.style.animation = '';
      }, 600);
    });
  });
});

// Add pulse animation to CSS via JavaScript
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;
document.head.appendChild(style);

// Chart animations when they come into view
function setupChartAnimations() {
  const chartContainers = document.querySelectorAll('.chart-container');
  
  const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const canvas = entry.target.querySelector('canvas');
        if (canvas) {
          // Trigger chart animation
          const chartInstance = Chart.getChart(canvas);
          if (chartInstance) {
            chartInstance.update('show');
          }
        }
      }
    });
  }, { threshold: 0.3 });
  
  chartContainers.forEach(container => {
    chartObserver.observe(container);
  });
}

// Initialize chart animations after charts are setup
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(setupChartAnimations, 1000);
});

// Smooth hover effects for metric cards
document.addEventListener('DOMContentLoaded', function() {
  const metricCards = document.querySelectorAll('.metric-card');
  
  metricCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
      this.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.4)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '';
    });
  });
});

// Enhanced scroll-triggered animations
function setupEnhancedAnimations() {
  const elements = document.querySelectorAll('.growth-card, .benchmark-card, .achievement-card');
  
  const enhancedObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, { threshold: 0.2 });
  
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    enhancedObserver.observe(element);
  });
}

// Initialize enhanced animations
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(setupEnhancedAnimations, 500);
});

// Accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
  // Add focus indicators for interactive elements
  const interactiveElements = document.querySelectorAll('button, .nav-link, .method-step, .achievement-card, .metric-card');
  
  interactiveElements.forEach(element => {
    element.addEventListener('focus', function() {
      this.style.outline = `2px solid ${data.dark_mode_colors.accent_primary}`;
      this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
      this.style.outline = 'none';
    });
  });
});

// Performance optimization - lazy load animations
document.addEventListener('DOMContentLoaded', function() {
  if ('IntersectionObserver' in window) {
    // All intersection observers are already set up above
    console.log('Intersection Observer is supported');
  } else {
    // Fallback for older browsers
    console.log('Intersection Observer not supported, using fallback');
    
    // Trigger all animations immediately
    document.querySelectorAll('.metric-number').forEach(element => {
      const target = parseFloat(element.getAttribute('data-target'));
      element.textContent = target % 1 === 0 ? Math.floor(target) : target.toFixed(1);
    });
    
    document.querySelectorAll('.progress-bar-fill').forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width + '%';
    });
    
    document.querySelectorAll('.benchmark-fill').forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width + '%';
    });
  }
});

// Dark mode specific enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Enhanced glow effects for dark mode
  const glowElements = document.querySelectorAll('.metric-card.highlight, .comparison-card.improved');
  
  glowElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.boxShadow = `0 0 30px rgba(33, 156, 219, 0.3), ${this.style.boxShadow}`;
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.boxShadow = this.style.boxShadow.replace('0 0 30px rgba(33, 156, 219, 0.3), ', '');
    });
  });
  
  // Add subtle breathing animation to primary elements
  const primaryElements = document.querySelectorAll('.hero-title-line2, .metric-number');
  primaryElements.forEach(element => {
    element.style.animation = 'subtle-glow 3s ease-in-out infinite alternate';
  });
});

// Add subtle glow animation
const glowStyle = document.createElement('style');
glowStyle.textContent = `
  @keyframes subtle-glow {
    0% { text-shadow: 0 0 5px rgba(33, 156, 219, 0.3); }
    100% { text-shadow: 0 0 15px rgba(33, 156, 219, 0.5); }
  }
`;
document.head.appendChild(glowStyle);