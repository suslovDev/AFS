import { useEffect, useState } from 'react';

type TOptions = string[];

export const useSelect = (onChange: any, initialValue: string[]) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedItems, setSelectedItems] = useState<TOptions>([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (option: string) => {
    setSelectedItems((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const handleSelectOne = (option: string) => {
    setSelectedItem(option);
  };

  const isActive = (option: string) => {
    return selectedItem === option || selectedItems?.includes(option);
  };

  useEffect(() => {
    onChange && onChange(selectedItems);
  }, [isOpen]);

  useEffect(() => {
    setSelectedItems(initialValue);
  }, []);

  return {
    toggleDropdown,
    handleCheckboxChange,
    handleSelectOne,
    isActive,
    selectedItem,
    selectedItems,
    isOpen,
  };
};
