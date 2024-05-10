var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = SymbolicInference","category":"page"},{"location":"#SymbolicInference","page":"Home","title":"SymbolicInference","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for SymbolicInference.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [SymbolicInference]","category":"page"},{"location":"#SymbolicInference.get_recurrence_points_from_data-Tuple{Vector{Float64}, Dict{String, Vector}}","page":"Home","title":"SymbolicInference.get_recurrence_points_from_data","text":"get_recurrence_points_from_data(data_source::Vector{Int64}, motifs::Vector{Tuple{Int64, Int64}}, window=2)\n\nThis function returns x and y coordinates for a given window considering start and size of each motif.\nThe y coordinates are the values from data provided by the user.\n\n\n\n\n\n","category":"method"},{"location":"#SymbolicInference.rec_matrix_motifs-Tuple{RecurrenceAnalysis.RecurrenceMatrix}","page":"Home","title":"SymbolicInference.rec_matrix_motifs","text":"rec_matrix_motifs(rec_matrix::RecurrenceMatrix;seqs=\"recurrences\",max_window=6,n_motifs=2)\n\nReturns set of probabilities associated with consecutive runs in off-diagonals.\n\nArgument seqs sets the type of consecutive sequences: either 'double' (recurrences and non-recurrences),  'recurrences' or 'poincare' (non-recurrences).  The first n diagonals (given by max_window argument) are considered, along with nmotifs for each diagonal.  See `AnalyticComb.weightedbinrunsprob` for definition of symbolic construction.  \n\n\n\n\n\n","category":"method"},{"location":"#SymbolicInference.rec_matrix_probs-Tuple{RecurrenceAnalysis.RecurrenceMatrix}","page":"Home","title":"SymbolicInference.rec_matrix_probs","text":"rec_matrix_probs(rec_matrix::RecurrenceMatrix;seqs=\"double\",max_window=6)\n\nReturns set of probabilities associated with consecutive runs in off-diagonals.\n\nArgument seqs sets the type of consecutive sequences: either 'double' (recurrences and non-recurrences),  'recurrences' or 'poincare' (non-recurrences).  The first n diagonals (given by max_window argument) are considered. See also AnalyticComb.p_val_weighted and  AnalyticComb.weighted_bin_runs_coeff.  \n\n\n\n\n\n","category":"method"}]
}
