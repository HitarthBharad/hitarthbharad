import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { ProjectsSection } from './projects-section';

describe('ProjectsSection', () => {
  describe('Component Rendering', () => {
    it('renders without crashing', () => {
      const { container } = render(<ProjectsSection />);
      const section = container.querySelector('section#projects');
      expect(section).toBeInTheDocument();
    });

    it('renders the section with correct id', () => {
      render(<ProjectsSection />);
      const section = document.querySelector('#projects');
      expect(section).toBeInTheDocument();
    });

    it('renders the section heading', () => {
      render(<ProjectsSection />);
      const heading = screen.getByRole('heading', { level: 2, name: /Other Shipped Work/i });
      expect(heading).toBeInTheDocument();
    });

    it('renders the "Production Systems" label', () => {
      render(<ProjectsSection />);
      expect(screen.getByText('Production Systems')).toBeInTheDocument();
    });
  });

  describe('Projects Display', () => {
    it('renders all 4 projects', () => {
      render(<ProjectsSection />);
      const articles = screen.getAllByRole('article');
      expect(articles).toHaveLength(4);
    });

    it('renders project names as headings', () => {
      render(<ProjectsSection />);
      expect(screen.getByRole('heading', { level: 4, name: /Auto PO Processor/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 4, name: /Tucson Crime Pattern Analysis Dashboard/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 4, name: /Anomaly Detection in Time-Series Patterns/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 4, name: /VSI Lab Portal/i })).toBeInTheDocument();
    });

    it('renders project descriptions', () => {
      render(<ProjectsSection />);
      expect(screen.getByText(/Intelligent document processing platform/i)).toBeInTheDocument();
      expect(screen.getByText(/End-to-end analytics platform/i)).toBeInTheDocument();
      expect(screen.getByText(/Production anomaly detection pipeline/i)).toBeInTheDocument();
      expect(screen.getByText(/Centralized research management ecosystem/i)).toBeInTheDocument();
    });
  });

  describe('Project Highlights', () => {
    it('renders all highlights for Auto PO Processor', () => {
      render(<ProjectsSection />);
      expect(screen.getByText(/Achieved 95% extraction accuracy/i)).toBeInTheDocument();
      expect(screen.getByText(/Built secure processing pipelines/i)).toBeInTheDocument();
      expect(screen.getByText(/Implemented comprehensive testing suite/i)).toBeInTheDocument();
    });

    it('renders highlights as list items', () => {
      render(<ProjectsSection />);
      const articles = screen.getAllByRole('article');
      articles.forEach(article => {
        const list = within(article).getByRole('list');
        expect(list).toBeInTheDocument();
        const listItems = within(list).getAllByRole('listitem');
        expect(listItems.length).toBeGreaterThan(0);
      });
    });

    it('renders bullet points for highlights', () => {
      render(<ProjectsSection />);
      const bulletText = screen.getAllByText('•');
      expect(bulletText.length).toBeGreaterThan(0);
    });
  });

  describe('Project Metrics', () => {
    it('displays metric labels correctly', () => {
      render(<ProjectsSection />);
      expect(screen.getByText('Accuracy')).toBeInTheDocument();
      expect(screen.getByText('Uptime')).toBeInTheDocument();
      expect(screen.getByText('Detection Precision')).toBeInTheDocument();
      expect(screen.getByText('Global Reach')).toBeInTheDocument();
    });

    it('displays metric values correctly', () => {
      render(<ProjectsSection />);
      expect(screen.getByText('95%')).toBeInTheDocument();
      expect(screen.getByText('99.9%')).toBeInTheDocument();
      expect(screen.getByText('92%')).toBeInTheDocument();
      expect(screen.getByText('High Impact')).toBeInTheDocument();
    });

    it('displays metric changes correctly', () => {
      render(<ProjectsSection />);
      expect(screen.getByText('Multi-format PDFs')).toBeInTheDocument();
      expect(screen.getByText('Real-time ETL')).toBeInTheDocument();
      expect(screen.getByText('-35% response time')).toBeInTheDocument();
      expect(screen.getByText('from Zero Presence')).toBeInTheDocument();
    });
  });

  describe('Technology Stack', () => {
    it('displays technology stack for each project', () => {
      render(<ProjectsSection />);
      expect(screen.getByText(/Python, FastAPI, Next.js, TypeScript/i)).toBeInTheDocument();
      expect(screen.getByText(/R \(Shiny, Quarto\), PostgreSQL/i)).toBeInTheDocument();
      expect(screen.getByText(/Python, Pandas, NumPy, Scikit-learn/i)).toBeInTheDocument();
      expect(screen.getByText(/Next.js, TypeScript, React, Tailwind CSS/i)).toBeInTheDocument();
    });
  });

  describe('Project Links', () => {
    it('renders "View Details" links for all projects', () => {
      render(<ProjectsSection />);
      const links = screen.getAllByText(/View Details/i);
      expect(links).toHaveLength(4);
    });

    it('links have correct href attributes', () => {
      render(<ProjectsSection />);
      const links = screen.getAllByRole('link', { name: /View Details/i });

      expect(links[0]).toHaveAttribute('href', 'https://auto-po.app');
      expect(links[1]).toHaveAttribute('href', 'https://info-526-f24.github.io/project-01-VIZards/');
      expect(links[2]).toHaveAttribute('href', '#');
      expect(links[3]).toHaveAttribute('href', 'https://vsi-lab.vercel.app');
    });

    it('links contain arrow character', () => {
      render(<ProjectsSection />);
      const links = screen.getAllByRole('link', { name: /View Details/i });
      links.forEach(link => {
        expect(link.textContent).toMatch(/→/);
      });
    });
  });

  describe('Semantic HTML and Accessibility', () => {
    it('uses semantic section element', () => {
      const { container } = render(<ProjectsSection />);
      const section = container.querySelector('section#projects');
      expect(section).toBeInTheDocument();
      expect(section?.tagName).toBe('SECTION');
    });

    it('uses semantic article elements for projects', () => {
      render(<ProjectsSection />);
      const articles = screen.getAllByRole('article');
      articles.forEach(article => {
        expect(article.tagName).toBe('ARTICLE');
      });
    });

    it('uses proper heading hierarchy', () => {
      render(<ProjectsSection />);
      const h2 = screen.getByRole('heading', { level: 2 });
      expect(h2).toBeInTheDocument();

      const h4s = screen.getAllByRole('heading', { level: 4 });
      expect(h4s).toHaveLength(4);
    });

    it('all links are accessible', () => {
      render(<ProjectsSection />);
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        expect(link).toBeVisible();
        expect(link).toHaveAttribute('href');
      });
    });
  });

  describe('CSS Classes and Styling', () => {
    it('applies correct styling classes to section', () => {
      const { container } = render(<ProjectsSection />);
      const section = container.querySelector('#projects');
      expect(section).toHaveClass('py-20', 'lg:py-28');
    });

    it('applies grid layout classes', () => {
      const { container } = render(<ProjectsSection />);
      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('gap-8', 'md:grid-cols-2');
    });

    it('applies correct styling to project cards', () => {
      render(<ProjectsSection />);
      const articles = screen.getAllByRole('article');
      articles.forEach(article => {
        expect(article).toHaveClass('rounded-lg', 'border', 'border-border', 'bg-surface', 'p-8');
      });
    });
  });

  describe('Individual Project Tests', () => {
    it('Auto PO Processor has all required elements', () => {
      render(<ProjectsSection />);
      const heading = screen.getByRole('heading', { name: /Auto PO Processor/i });
      const article = heading.closest('article');

      expect(article).toBeInTheDocument();
      expect(within(article!).getByText(/Intelligent document processing platform/i)).toBeInTheDocument();
      expect(within(article!).getByText('Accuracy')).toBeInTheDocument();
      expect(within(article!).getByText('95%')).toBeInTheDocument();
      expect(within(article!).getByRole('link')).toHaveAttribute('href', 'https://auto-po.app');
    });

    it('Tucson Crime dashboard has all required elements', () => {
      render(<ProjectsSection />);
      const heading = screen.getByRole('heading', { name: /Tucson Crime Pattern Analysis Dashboard/i });
      const article = heading.closest('article');

      expect(article).toBeInTheDocument();
      expect(within(article!).getByText(/End-to-end analytics platform/i)).toBeInTheDocument();
      expect(within(article!).getByText('Uptime')).toBeInTheDocument();
      expect(within(article!).getByText('99.9%')).toBeInTheDocument();
    });

    it('Anomaly Detection project has all required elements', () => {
      render(<ProjectsSection />);
      const heading = screen.getByRole('heading', { name: /Anomaly Detection in Time-Series Patterns/i });
      const article = heading.closest('article');

      expect(article).toBeInTheDocument();
      expect(within(article!).getByText(/Production anomaly detection pipeline/i)).toBeInTheDocument();
      expect(within(article!).getByText('Detection Precision')).toBeInTheDocument();
      expect(within(article!).getByText('92%')).toBeInTheDocument();
    });

    it('VSI Lab Portal has all required elements', () => {
      render(<ProjectsSection />);
      const heading = screen.getByRole('heading', { name: /VSI Lab Portal/i });
      const article = heading.closest('article');

      expect(article).toBeInTheDocument();
      expect(within(article!).getByText(/Centralized research management ecosystem/i)).toBeInTheDocument();
      expect(within(article!).getByText('Global Reach')).toBeInTheDocument();
      expect(within(article!).getByText('High Impact')).toBeInTheDocument();
      expect(within(article!).getByRole('link')).toHaveAttribute('href', 'https://vsi-lab.vercel.app');
    });
  });

  describe('Edge Cases and Robustness', () => {
    it('handles projects with exactly 3 highlights', () => {
      render(<ProjectsSection />);
      const articles = screen.getAllByRole('article');

      articles.forEach(article => {
        const listItems = within(article).getAllByRole('listitem');
        expect(listItems).toHaveLength(3);
      });
    });

    it('renders metric with non-percentage values correctly', () => {
      render(<ProjectsSection />);
      expect(screen.getByText('High Impact')).toBeInTheDocument();
    });

    it('handles hash link for unavailable projects', () => {
      render(<ProjectsSection />);
      const links = screen.getAllByRole('link', { name: /View Details/i });
      const hashLink = links.find(link => link.getAttribute('href') === '#');
      expect(hashLink).toBeInTheDocument();
    });

    it('renders special characters in text correctly', () => {
      render(<ProjectsSection />);
      // Test arrow character in links
      const links = screen.getAllByText(/View Details →/);
      expect(links.length).toBe(4);

      // Test bullet points
      const bullets = screen.getAllByText('•');
      expect(bullets.length).toBeGreaterThan(0);
    });

    it('handles long project names without breaking layout', () => {
      render(<ProjectsSection />);
      const longName = screen.getByRole('heading', { name: /Tucson Crime Pattern Analysis Dashboard/i });
      expect(longName).toBeInTheDocument();
      expect(longName).toBeVisible();
    });

    it('handles complex nested parentheses in stack text', () => {
      render(<ProjectsSection />);
      expect(screen.getByText(/R \(Shiny, Quarto\)/i)).toBeInTheDocument();
    });
  });

  describe('Layout and Responsiveness', () => {
    it('renders container with proper spacing', () => {
      const { container } = render(<ProjectsSection />);
      const innerContainer = container.querySelector('.mx-auto');
      expect(innerContainer).toHaveClass('max-w-container', 'px-6', 'md:px-12', 'lg:px-20');
    });

    it('grid has responsive columns', () => {
      const { container } = render(<ProjectsSection />);
      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('md:grid-cols-2');
    });
  });

  describe('Content Integrity', () => {
    it('each project has exactly 3 highlights', () => {
      render(<ProjectsSection />);
      const articles = screen.getAllByRole('article');

      expect(articles).toHaveLength(4);
      articles.forEach(article => {
        const highlights = within(article).getAllByRole('listitem');
        expect(highlights).toHaveLength(3);
      });
    });

    it('each project has a metric with label, value, and change', () => {
      render(<ProjectsSection />);
      const metricLabels = ['Accuracy', 'Uptime', 'Detection Precision', 'Global Reach'];
      const metricValues = ['95%', '99.9%', '92%', 'High Impact'];

      metricLabels.forEach(label => {
        expect(screen.getByText(label)).toBeInTheDocument();
      });

      metricValues.forEach(value => {
        expect(screen.getByText(value)).toBeInTheDocument();
      });
    });

    it('each project has a technology stack', () => {
      render(<ProjectsSection />);
      const articles = screen.getAllByRole('article');

      articles.forEach(article => {
        const stackElements = within(article).getAllByText(/,/);
        expect(stackElements.length).toBeGreaterThan(0);
      });
    });

    it('renders correct order of projects', () => {
      render(<ProjectsSection />);
      const headings = screen.getAllByRole('heading', { level: 4 });

      expect(headings[0]).toHaveTextContent('Auto PO Processor');
      expect(headings[1]).toHaveTextContent('Tucson Crime Pattern Analysis Dashboard');
      expect(headings[2]).toHaveTextContent('Anomaly Detection in Time-Series Patterns');
      expect(headings[3]).toHaveTextContent('VSI Lab Portal');
    });
  });

  describe('Additional Confidence Tests', () => {
    it('does not render duplicate projects', () => {
      render(<ProjectsSection />);
      const projectNames = ['Auto PO Processor', 'Tucson Crime Pattern Analysis Dashboard',
                            'Anomaly Detection in Time-Series Patterns', 'VSI Lab Portal'];

      projectNames.forEach(name => {
        const headings = screen.getAllByRole('heading', { name: new RegExp(name, 'i') });
        expect(headings).toHaveLength(1);
      });
    });

    it('metric callout has proper styling classes', () => {
      const { container } = render(<ProjectsSection />);
      const metricBoxes = container.querySelectorAll('.border.border-border.bg-surface-muted');
      expect(metricBoxes.length).toBe(4);
    });

    it('handles empty href gracefully', () => {
      render(<ProjectsSection />);
      const allLinks = screen.getAllByRole('link');
      allLinks.forEach(link => {
        const href = link.getAttribute('href');
        expect(href).toBeTruthy();
        expect(href).not.toBe('');
      });
    });

    it('negative test: does not render non-existent project', () => {
      render(<ProjectsSection />);
      expect(screen.queryByText('Non Existent Project')).not.toBeInTheDocument();
    });

    it('boundary test: verifies exact count of all major elements', () => {
      render(<ProjectsSection />);

      expect(screen.getAllByRole('article')).toHaveLength(4);
      expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(4);
      expect(screen.getAllByRole('link')).toHaveLength(4);
      expect(screen.getAllByRole('list')).toHaveLength(4);
    });
  });
});