import cn from 'classnames';
import { ArrowDown, ArrowUp } from '@shared/icons';
import { Checkbox } from '@shared/ui/checkboxes';
import { useSelect } from './model';
import st from './styles.module.scss';

interface Props {
  initialValue: string[];
  options: string[];
  onChange: (values: string[]) => void;
  isMultible?: boolean;
}

export const Selector = ({ initialValue, options, onChange, isMultible = true }: Props) => {
  const {
    handleCheckboxChange,
    handleSelectOne,
    toggleDropdown,
    selectedItem,
    selectedItems,
    isOpen,
    isActive,
  } = useSelect(onChange, initialValue);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      toggleDropdown();
    }
  };

  return (
    <>
      <div className={cn(isOpen && st.overlay)} onClick={toggleDropdown} />
      <div className={st.wrap}>
        <div onClick={toggleDropdown} onKeyDown={handleKeyDown} className={st.display} tabIndex={0}>
          <span className={st.field}>{selectedItem || selectedItems?.join(', ')}</span>
          <span className={st.icon}>{!isOpen ? <ArrowDown /> : <ArrowUp />}</span>
        </div>
        {isOpen && (
          <div className={st.dropdown}>
            {options.map((option) => (
              <div
                key={option}
                className={cn(st.row, isActive(option) && st.active)}
                onClick={() =>
                  isMultible ? handleCheckboxChange(option) : handleSelectOne(option)
                }
              >
                {isMultible && (
                  <Checkbox
                    isChecked={isActive(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                )}

                <label>{option}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
