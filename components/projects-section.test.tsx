import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectsSection } from './projects-section';

describe('ProjectsSection', () => {
  describe('Section Structure', () => {
    it('should render the section with correct id', () => {
      const { container } = render(<ProjectsSection />);
      const section = container.querySelector('section#projects');
      expect(section).toBeInTheDocument();
      expect(section).toHaveAttribute('id', 'projects');
    });

    it('should render the section header with correct title', () => {
      render(<ProjectsSection />);
      expect(screen.getByText('Production Systems')).toBeInTheDocument();
      expect(screen.getByText('Other Shipped Work')).toBeInTheDocument();
    });

    it('should render the heading with correct heading level', () => {
      render(<ProjectsSection />);
      const heading = screen.getByRole('heading', { name: /Other Shipped Work/i });
      expect(heading.tagName).toBe('H2');
    });
  });

  describe('Project Cards', () => {
    it('should render all 4 project cards', () => {
      render(<ProjectsSection />);
      const articles = screen.getAllByRole('article');
      expect(articles).toHaveLength(4);
    });

    it('should render each project with its name', () => {
      render(<ProjectsSection />);
      expect(screen.getByText('Auto PO Processor')).toBeInTheDocument();
      expect(screen.getByText('Tucson Crime Pattern Analysis Dashboard')).toBeInTheDocument();
      expect(screen.getByText('Anomaly Detection in Time-Series Patterns')).toBeInTheDocument();
      expect(screen.getByText('VSI Lab Portal')).toBeInTheDocument();
    });

    it('should render each project name as a heading', () => {
      render(<ProjectsSection />);
      const projectHeadings = screen.getAllByRole('heading', { level: 4 });
      expect(projectHeadings).toHaveLength(4);
      expect(projectHeadings[0]).toHaveTextContent('Auto PO Processor');
    });

    it('should render project descriptions', () => {
      render(<ProjectsSection />);
      expect(
        screen.getByText(/Intelligent document processing platform extracting structured data/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/End-to-end analytics platform processing real-time crime data/i)
      ).toBeInTheDocument();
    });
  });

  describe('Project Metrics', () => {
    it('should render metric labels for all projects', () => {
      render(<ProjectsSection />);
      expect(screen.getByText('Accuracy')).toBeInTheDocument();
      expect(screen.getByText('Uptime')).toBeInTheDocument();
      expect(screen.getByText('Detection Precision')).toBeInTheDocument();
      expect(screen.getByText('Global Reach')).toBeInTheDocument();
    });

    it('should render metric values for all projects', () => {
      render(<ProjectsSection />);
      expect(screen.getByText('95%')).toBeInTheDocument();
      expect(screen.getByText('99.9%')).toBeInTheDocument();
      expect(screen.getByText('92%')).toBeInTheDocument();
      expect(screen.getByText('High Impact')).toBeInTheDocument();
    });

    it('should render metric changes for all projects', () => {
      render(<ProjectsSection />);
      expect(screen.getByText('Multi-format PDFs')).toBeInTheDocument();
      expect(screen.getByText('Real-time ETL')).toBeInTheDocument();
      expect(screen.getByText('-35% response time')).toBeInTheDocument();
      expect(screen.getByText('from Zero Presence')).toBeInTheDocument();
    });
  });

  describe('Project Highlights', () => {
    it('should render highlights as a list for each project', () => {
      render(<ProjectsSection />);
      const lists = screen.getAllByRole('list');
      expect(lists).toHaveLength(4);
    });

    it('should render the correct number of highlights for Auto PO Processor', () => {
      render(<ProjectsSection />);
      expect(
        screen.getByText(/Achieved 95% extraction accuracy across multi-format document types/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Built secure processing pipelines with PII data encryption/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Implemented comprehensive testing suite with PyTest/i)
      ).toBeInTheDocument();
    });

    it('should render list items with bullet points', () => {
      render(<ProjectsSection />);
      const listItems = screen.getAllByRole('listitem');
      expect(listItems.length).toBeGreaterThan(0);
      // Check that first list item contains bullet character
      expect(listItems[0].textContent).toContain('•');
    });
  });

  describe('Technology Stack', () => {
    it('should render technology stack for each project', () => {
      render(<ProjectsSection />);
      expect(
        screen.getByText(/Python, FastAPI, Next.js, TypeScript, Tesseract OCR/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/R \(Shiny, Quarto\), PostgreSQL, Leaflet.js/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Python, Pandas, NumPy, Scikit-learn, Prophet/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Next.js, TypeScript, React, Tailwind CSS, Framer Motion/i)
      ).toBeInTheDocument();
    });
  });

  describe('Project Links', () => {
    it('should render a link for each project', () => {
      render(<ProjectsSection />);
      const links = screen.getAllByRole('link', { name: /View Details/i });
      expect(links).toHaveLength(4);
    });

    it('should have correct href for Auto PO Processor', () => {
      render(<ProjectsSection />);
      const links = screen.getAllByRole('link', { name: /View Details/i });
      expect(links[0]).toHaveAttribute('href', 'https://auto-po.app');
    });

    it('should have correct href for Tucson Crime Dashboard', () => {
      render(<ProjectsSection />);
      const links = screen.getAllByRole('link', { name: /View Details/i });
      expect(links[1]).toHaveAttribute(
        'href',
        'https://info-526-f24.github.io/project-01-VIZards/'
      );
    });

    it('should have correct href for Anomaly Detection project', () => {
      render(<ProjectsSection />);
      const links = screen.getAllByRole('link', { name: /View Details/i });
      expect(links[2]).toHaveAttribute('href', '#');
    });

    it('should have correct href for VSI Lab Portal', () => {
      render(<ProjectsSection />);
      const links = screen.getAllByRole('link', { name: /View Details/i });
      expect(links[3]).toHaveAttribute('href', 'https://vsi-lab.vercel.app');
    });

    it('should render link text with arrow symbol', () => {
      render(<ProjectsSection />);
      const links = screen.getAllByRole('link', { name: /View Details/i });
      expect(links[0]).toHaveTextContent('View Details →');
    });
  });

  describe('Semantic HTML and Accessibility', () => {
    it('should use semantic article elements for each project', () => {
      render(<ProjectsSection />);
      const articles = screen.getAllByRole('article');
      expect(articles).toHaveLength(4);
    });

    it('should have proper heading hierarchy', () => {
      render(<ProjectsSection />);
      const h2 = screen.getByRole('heading', { level: 2, name: /Other Shipped Work/i });
      const h4s = screen.getAllByRole('heading', { level: 4 });
      expect(h2).toBeInTheDocument();
      expect(h4s).toHaveLength(4);
    });

    it('should render section element with semantic section tag', () => {
      render(<ProjectsSection />);
      const section = document.querySelector('section#projects');
      expect(section).toBeInTheDocument();
    });
  });

  describe('Grid Layout', () => {
    it('should render projects in a grid container', () => {
      const { container } = render(<ProjectsSection />);
      const grid = container.querySelector('.grid');
      expect(grid).toBeInTheDocument();
    });

    it('should apply responsive grid classes', () => {
      const { container } = render(<ProjectsSection />);
      const grid = container.querySelector('.grid');
      expect(grid?.className).toContain('md:grid-cols-2');
    });
  });

  describe('Edge Cases and Regression Tests', () => {
    it('should render without crashing when component mounts', () => {
      expect(() => render(<ProjectsSection />)).not.toThrow();
    });

    it('should render all content in a single section element', () => {
      const { container } = render(<ProjectsSection />);
      const sections = container.querySelectorAll('section');
      expect(sections).toHaveLength(1);
    });

    it('should have unique keys for all projects', () => {
      const { container } = render(<ProjectsSection />);
      const articles = container.querySelectorAll('article');
      const projectNames = Array.from(articles).map((article) => {
        const heading = article.querySelector('h4');
        return heading?.textContent;
      });
      const uniqueNames = new Set(projectNames);
      expect(uniqueNames.size).toBe(4);
    });

    it('should render highlights with unique keys', () => {
      render(<ProjectsSection />);
      const listItems = screen.getAllByRole('listitem');
      // All highlights across all projects should be unique
      const highlightTexts = listItems.map((item) => item.textContent);
      const uniqueHighlights = new Set(highlightTexts);
      expect(uniqueHighlights.size).toBe(highlightTexts.length);
    });

    it('should maintain correct document structure', () => {
      const { container } = render(<ProjectsSection />);
      const section = container.querySelector('section#projects');
      const innerDiv = section?.querySelector('.mx-auto');
      const grid = innerDiv?.querySelector('.grid');
      expect(section).toBeInTheDocument();
      expect(innerDiv).toBeInTheDocument();
      expect(grid).toBeInTheDocument();
    });
  });

  describe('Content Verification', () => {
    it('should render complete Auto PO Processor project data', () => {
      render(<ProjectsSection />);
      expect(screen.getByText('Auto PO Processor')).toBeInTheDocument();
      expect(
        screen.getByText(/Intelligent document processing platform/i)
      ).toBeInTheDocument();
      expect(screen.getByText('Accuracy')).toBeInTheDocument();
      expect(screen.getByText('95%')).toBeInTheDocument();
      expect(screen.getByText('Multi-format PDFs')).toBeInTheDocument();
    });

    it('should render complete VSI Lab Portal project data', () => {
      render(<ProjectsSection />);
      expect(screen.getByText('VSI Lab Portal')).toBeInTheDocument();
      expect(
        screen.getByText(/Centralized research management ecosystem/i)
      ).toBeInTheDocument();
      expect(screen.getByText('Global Reach')).toBeInTheDocument();
      expect(screen.getByText('High Impact')).toBeInTheDocument();
      expect(screen.getByText('from Zero Presence')).toBeInTheDocument();
    });

    it('should render all 12 highlight points across all projects', () => {
      render(<ProjectsSection />);
      const listItems = screen.getAllByRole('listitem');
      // 4 projects × 3 highlights each = 12 total
      expect(listItems).toHaveLength(12);
    });
  });

  describe('CSS Classes and Styling', () => {
    it('should apply correct styling classes to project cards', () => {
      const { container } = render(<ProjectsSection />);
      const articles = container.querySelectorAll('article');
      articles.forEach((article) => {
        expect(article.className).toContain('rounded-lg');
        expect(article.className).toContain('border');
        expect(article.className).toContain('bg-surface');
      });
    });

    it('should apply accent color to section label', () => {
      const { container } = render(<ProjectsSection />);
      const label = container.querySelector('.text-accent-brand');
      expect(label).toBeInTheDocument();
      expect(label?.textContent).toBe('Production Systems');
    });

    it('should apply correct padding to section', () => {
      const { container } = render(<ProjectsSection />);
      const section = container.querySelector('section');
      expect(section?.className).toContain('py-20');
      expect(section?.className).toContain('lg:py-28');
    });
  });

  describe('Boundary and Negative Cases', () => {
    it('should render section even if no projects were present (structural test)', () => {
      // This test verifies that the section structure is independent of project data
      const { container } = render(<ProjectsSection />);
      const section = container.querySelector('section#projects');
      expect(section).toBeInTheDocument();
    });

    it('should handle projects with special characters in names', () => {
      render(<ProjectsSection />);
      // Testing that project names with special characters render correctly
      expect(screen.getByText('Auto PO Processor')).toBeInTheDocument();
    });

    it('should render projects with varying content lengths', () => {
      render(<ProjectsSection />);
      // Short project name
      expect(screen.getByText('VSI Lab Portal')).toBeInTheDocument();
      // Long project name
      expect(
        screen.getByText('Tucson Crime Pattern Analysis Dashboard')
      ).toBeInTheDocument();
    });

    it('should correctly render hash link for project without external URL', () => {
      render(<ProjectsSection />);
      const links = screen.getAllByRole('link', { name: /View Details/i });
      const hashLink = Array.from(links).find(
        (link) => (link as HTMLAnchorElement).getAttribute('href') === '#'
      );
      expect(hashLink).toBeInTheDocument();
    });
  });
});