import { render, screen } from '@testing-library/react';
import Mastering from '../page';

describe('Mastering Page', () => {
  it('renders the mastering page title', () => {
    render(<Mastering />);
    expect(screen.getByText('Mastering')).toBeInTheDocument();
  });

  it('displays professional finishing section', () => {
    render(<Mastering />);
    expect(screen.getByText('Professionele Afwerking')).toBeInTheDocument();
    expect(screen.getByText(/De laatste belangrijke stap/)).toBeInTheDocument();
  });

  it('shows all mastering features', () => {
    render(<Mastering />);
    expect(screen.getByText('Loudness optimalisatie')).toBeInTheDocument();
    expect(screen.getByText('Stereo enhancement')).toBeInTheDocument();
    expect(screen.getByText('Platform-specifieke masters')).toBeInTheDocument();
  });

  it('displays tools section with correct content', () => {
    render(<Mastering />);
    expect(screen.getByText('Onze Tools')).toBeInTheDocument();
    expect(screen.getByText('Analog Hardware')).toBeInTheDocument();
    expect(screen.getByText('Digital Processing')).toBeInTheDocument();
    expect(screen.getByText('Premium mastering apparatuur')).toBeInTheDocument();
    expect(screen.getByText('Geavanceerde software plugins')).toBeInTheDocument();
  });

  it('has correct layout structure', () => {
    const { container } = render(<Mastering />);
    expect(container.querySelector('main')).toHaveClass('min-h-screen');
    expect(container.querySelector('section')).toHaveClass('grid');
  });
});
