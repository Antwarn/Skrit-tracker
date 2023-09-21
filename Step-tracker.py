import tkinter as tk

def record_step():
    current_steps = int(steps_label["text"])
    new_steps = current_steps + 1
    steps_label["text"] = str(new_steps)

def reset_steps():
    steps_label["text"] = "0"

# Create the main window
root = tk.Tk()
root.title("Step Tracker")

# Create and configure widgets
steps_label = tk.Label(root, text="0", font=("Helvetica", 48))
record_button = tk.Button(root, text="Record Step", font=("Helvetica", 24), command=record_step)
reset_button = tk.Button(root, text="Reset", font=("Helvetica", 24), command=reset_steps)

# Place widgets on the window using grid layout
steps_label.grid(row=0, column=0, columnspan=2, padx=20, pady=20)
record_button.grid(row=1, column=0, padx=20, pady=20)
reset_button.grid(row=1, column=1, padx=20, pady=20)

# Start the Tkinter main loop
root.mainloop()
