import { MoreVertical, ChevronLast, ChevronFirst } from 'lucide-react';
import React, {
  useContext,
  createContext,
  useState,
  type ReactNode,
} from 'react';
import cn from 'classnames';

// Sidebar context type
interface SidebarContextType {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Sidebar Props
interface SidebarProps {
  children: ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside
      className={cn(
        {
          'col-span-4': expanded,
          'col-span-2': !expanded,
        },
        `h-screen`,
      )}
    >
      <nav className="h-full flex flex-col bg-indigo-50 border-r border-indigo-200 shadow-sm">
        {/* Logo & toggle */}
        <div className="p-4 pb-2 flex justify-between items-center">
          <div
            className={`overflow-hidden font-bold text-xl text-indigo-700 transition-all ${
              expanded ? 'w-32' : 'w-0'
            }`}
          >
            MyApp
          </div>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-indigo-100 hover:bg-indigo-200 transition-colors"
          >
            {expanded ?
              <ChevronFirst />
            : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        {/* User info */}
        <div className="border-t border-indigo-200 flex p-3 items-center">
          <div className="w-10 h-10 rounded-md bg-indigo-200 flex items-center justify-center text-indigo-700 font-semibold">
            JD
          </div>
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? 'w-52 ml-3' : 'w-0'
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-indigo-900">John Doe</h4>
              <span className="text-xs text-indigo-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical
              size={20}
              className="text-indigo-600"
            />
          </div>
        </div>
      </nav>
    </aside>
  );
};

// SidebarItem Props
interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  active,
  alert,
}) => {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error('SidebarItem must be used within a SidebarContext');

  const { expanded } = context;

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active ?
            'bg-indigo-100 text-indigo-800'
          : 'hover:bg-indigo-200 text-indigo-700'
        }
      `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded-full bg-indigo-500 ${
            expanded ? '' : 'top-2'
          }`}
        />
      )}
      {!expanded && (
        <div
          className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-50 text-indigo-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
        >
          {text}
        </div>
      )}
    </li>
  );
};
