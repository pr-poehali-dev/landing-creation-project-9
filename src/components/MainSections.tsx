import ProblemSolutionSection from './sections/ProblemSolutionSection';
import BenefitsSection from './sections/BenefitsSection';
import ProgramSection from './sections/ProgramSection';
import TestimonialsCTAFAQ from './sections/TestimonialsCTAFAQ';

interface MainSectionsProps {
  placesLeft: number;
  onOpenForm: (type: 'module01' | 'module02') => void;
}

const MainSections = ({ placesLeft, onOpenForm }: MainSectionsProps) => {
  return (
    <>
      <ProblemSolutionSection />
      <BenefitsSection />
      <ProgramSection placesLeft={placesLeft} onOpenForm={onOpenForm} />
      <TestimonialsCTAFAQ placesLeft={placesLeft} onOpenForm={onOpenForm} />
    </>
  );
};

export default MainSections;
