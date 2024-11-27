# Problems needs to solve
## Identify Inputs and Outputs:
### input
467..114..
...*......
..35..633.
......#...
### output : 467 + 35 + 633 = 1135, 114 (top right) not adjacent to a symbol.

## Constraints:
### Definition of adjacency:

- A number is adjacent to a symbol if it shares a row, column, or diagonal cell with the symbol.
- Valid part numbers:

- Each number must satisfy the adjacency rule to be considered a part number.
- Excluded numbers:

- Numbers that are not adjacent to any symbol do not contribute to the sum of part numbers.
Sum computation:

- The task is to compute the sum of all valid part numbers that meet the adjacency condition.
## Edge Cases:
### No symbols present
### No numbers adjacent to symbols
### All numbers adjacent to symbols
### Multiple adjacent symbols
### Symbols adjacent to the schematic’s edges
### Numbers located on a diagonal or in a pattern
### Large schematic
### Symbols in a line with numbers on one side
### Mixed symbols and numbers in clusters

## Break Down the Problem
- Step 1: Understand the Grid Structure
    - The schematic is a grid made up of rows and columns.
    - Each cell in the grid can contain:
    - Numbers (which may be part numbers).
    - Symbols (*, #, +, $) that act as references for adjacency.
    - Empty cells (represented by .) which are neither symbols nor part numbers.
    - We need to focus on identifying numbers that are adjacent to any symbol.
- Step 2: Define Adjacency
- A number is considered adjacent to a symbol if the symbol is in one of the 8 surrounding cells (including diagonals).

The number will only be a part number if one of the adjacent cells contains a symbol.
Step 3: Traverse the Grid
We need to traverse the grid to check each cell:
If the cell contains a number, check if any of its adjacent cells contain a symbol.
If the cell contains a symbol, we don't need to do anything with it directly for the sum, but we must use it to check for adjacent numbers.
Step 4: Identify Valid Part Numbers
For each number found in the grid, check if it is adjacent to any of the symbols (*, #, +, $).
If a number is adjacent to at least one symbol, it's considered a part number and should be included in the sum.
Step 5: Summing the Part Numbers
Once the part numbers are identified, sum them up.
Step 6: Handle Edge Cases
Handle cases such as:
No symbols in the grid (no part numbers).
No numbers adjacent to symbols.
Symbols at the edge or corners of the grid (ensure out-of-bounds checks).
Larger grids or grids with many adjacent symbols/numbers.
